import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SellerInformationService } from '../../BackendServices/seller-information.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-seller-infromation',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-seller-infromation.component.html',
  styleUrl: './update-seller-infromation.component.css'
})
export class UpdateSellerInfromationComponent implements OnInit {

  sellerForm!: FormGroup

  sellerId: any

  gender: any
  roomId: any
  emailId: any

  sellerData: any

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private beService: SellerInformationService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.gender = params['gender']
      this.emailId = params['emailId']
      this.roomId = params['roomId']
      this.sellerId = params['sellerId']
    })

    this.beService.getSellerInformation(this.roomId).subscribe((data: any) => {
      console.log(data);
      this.sellerData = data

      this.sellerForm.patchValue({
        sellerName: this.sellerData.sellerInformation.sellerName,
        city: this.sellerData.sellerInformation.city,
        mobileNumber: this.sellerData.sellerInformation.mobileNumber,
        age: this.sellerData.sellerInformation.age,
        profession: this.sellerData.sellerInformation.profession,
        mealType: this.sellerData.sellerInformation.mealType
      })
    });

    this.sellerForm = this.formBuilder.group({
      sellerName: new FormControl(''),
      city: new FormControl(''),
      mobileNumber: new FormControl(''),
      age: new FormControl(''),
      profession: new FormControl(''),
      mealType: new FormControl('')
    })

  }



  onClickUpdateSellerInformation() {
    console.log("onClickSellerInformation Called..");
    console.log(this.sellerForm.value);

    this.beService.updateSellerInformation(this.sellerForm.value, this.emailId, this.gender, this.roomId, this.sellerId).subscribe((data: any) => {
      console.log("Seller Information Added!!");

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Seller Information has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    })

    this.sellerForm.reset();
    this.router.navigate(['/sellerRoomDescription', this.roomId]);
  }

}
