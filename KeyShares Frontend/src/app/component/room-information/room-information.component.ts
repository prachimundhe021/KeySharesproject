import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RoomInformationService } from '../../BackendServices/room-information.service';

@Component({
  selector: 'app-room-information',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './room-information.component.html',
  styleUrl: './room-information.component.css'
})
export class RoomInformationComponent implements OnInit {

  roomForm!: FormGroup

  sellerId: any;
  gender: any

  genderIsValid: boolean = true

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private beService: RoomInformationService) {
  }

  ngOnInit(): void {
    // this.sellerId = this.route.snapshot.paramMap.get('sellerId');
    // console.log(this.sellerId);

    // this.route.queryParams.subscribe(params)

    this.route.queryParams.subscribe(params => {
      if (params['gender']) {
        this.gender = params['gender']
      }
      // if (params['gender']) {
      this.sellerId = params['id']
      // }
    })
    console.log("oninit Called");

    console.log(this.sellerId);
    console.log(this.gender);


    if (this.gender === 'male' || this.gender === 'Male') {
      this.genderIsValid = true
    } else {
      this.gender = false
    }

    // this.roomForm.patchValue({
    //   sellerId: this.sellerId
    // })

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

  onClickRoomInformation() {
    console.log("onClickRoomInformation Called..");
    console.log(this.roomForm.value);

    this.beService.addRoomInformation(this.roomForm.value, this.sellerId).subscribe((data: any) => {
      console.log("Room Information Added!!");
      console.log(data);
      this.roomId = data
      this.roomForm.reset();
      this.router.navigate(['/images', this.roomId]);
    })

  }


}
