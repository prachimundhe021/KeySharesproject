import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomInformationService } from '../../BackendServices/room-information.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-room-information',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './update-room-information.component.html',
  styleUrl: './update-room-information.component.css'
})
export class UpdateRoomInformationComponent implements OnInit {

  roomForm!: FormGroup

  sellerId: any;
  gender: any
  roomData: any
  genderIsValid: boolean = true

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private beService: RoomInformationService) {
  }

  ngOnInit(): void {

    this.roomId = this.route.snapshot.paramMap.get('roomId');
    console.log(this.roomId);

    this.route.queryParams.subscribe(params => {
      this.gender = params['gender']
      this.roomId = params['roomId']
      this.sellerId = params['sellerId']
    })

    console.log(this.gender);
    console.log(this.roomId);
    console.log(this.sellerId);



    if (this.gender === 'male' || this.gender === 'Male') {
      this.genderIsValid = true
    }

    this.beService.getRoomInformation(this.roomId).subscribe((data: any) => {
      console.log(data);
      this.roomData = data

      this.roomForm.patchValue({
        roomType: this.roomData.roomType,
        address: this.roomData.address,
        city: this.roomData.city,
        foodAllowed: this.roomData.foodAllowed,
        coolingType: this.roomData.coolingType,
        facilities: this.roomData.facilities,

        overallCapacity: this.roomData.overallCapacity,
        alreadyFilled: this.roomData.alreadyFilled,
        spaceAvailable: this.roomData.spaceAvailable,
        overallRent: this.roomData.overallRent,
        securityDeposit: this.roomData.securityDeposit,
        rentPerHead: this.roomData.rentPerHead
      })
    });


    this.roomForm = this.formBuilder.group({
      // sellerId: new FormControl(this.sellerId),
      roomType: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      foodAllowed: new FormControl(''),
      coolingType: new FormControl(''),
      facilities: new FormControl(''),

      overallCapacity: new FormControl(''),
      alreadyFilled: new FormControl(''),
      spaceAvailable: new FormControl(''),
      overallRent: new FormControl(''),
      securityDeposit: new FormControl(''),
      rentPerHead: new FormControl(''),
    })

  }

  roomId: any

  onClickUpdateRoomInformation() {
    console.log("onClickRoomInformation Called..");
    console.log(this.roomForm.value);

    this.beService.updateRoomInformation(this.roomForm.value, this.roomId).subscribe((data: any) => {
      console.log("Room Information Added!!");
      console.log(data);
      // this.roomId = data

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Room Information has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/sellerRoomDescription', this.roomId]);
    })

    this.roomForm.reset();

  }

}
