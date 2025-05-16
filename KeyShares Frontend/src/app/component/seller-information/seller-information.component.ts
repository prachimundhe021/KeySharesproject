import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SellerInformationService } from '../../BackendServices/seller-information.service';

@Component({
  selector: 'app-seller-information',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './seller-information.component.html',
  styleUrl: './seller-information.component.css'
})
export class SellerInformationComponent implements OnInit {

  sellerForm!: FormGroup

  sellerId: any

  gender: any

  emailId: any

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.gender = params['gender']
      this.emailId = params['emailId']
      console.log(this.emailId);

    })
  }

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private beService: SellerInformationService) {
    this.sellerForm = formBuilder.group({
      sellerName: new FormControl(''),
      city: new FormControl(''),
      mobileNumber: new FormControl(''),
      age: new FormControl(''),
      profession: new FormControl(''),
      mealType: new FormControl('')
    })
  }


  onClickSellerInformation() {
    console.log("onClickSellerInformation Called..");
    console.log(this.sellerForm.value);

    this.beService.addSellerInformation(this.sellerForm.value, this.emailId, this.gender).subscribe((data: any) => {
      console.log("Seller Information Added!!");

      console.log(this.gender);

      // console.log(data);
      this.sellerId = data
      console.log(this.sellerId);

      this.sellerForm.reset();
      this.router.navigate(['/roomInform'], { queryParams: { gender: this.gender, id: this.sellerId } })
    })
  }
}
