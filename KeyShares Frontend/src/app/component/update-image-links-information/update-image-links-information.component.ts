import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesInformationService } from '../../BackendServices/images-information.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-image-links-information',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './update-image-links-information.component.html',
  styleUrl: './update-image-links-information.component.css'
})
export class UpdateImageLinksInformationComponent implements OnInit {

  imageForm!: FormGroup
  imageId: any
  roomId: any;
  images: any

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private beService: ImagesInformationService) {
  }

  ngOnInit(): void {
    this.imageForm = this.formBuilder.group({
      // sellerId: new FormControl(this.sellerId),
      imageLink1: new FormControl(''),
      imageLink2: new FormControl(''),
      imageLink3: new FormControl(''),
      imageLink4: new FormControl('')
    })


    // this.route.queryParams.subscribe(params => {
    //   this.roomId = params['roomId']
    //   this.imageId = params['imageId']
    // })

    this.roomId = this.route.snapshot.paramMap.get('roomId');
    console.log(this.roomId);

    // this.imageId = this.route.snapshot.paramMap.get('imageId');
    // console.log(this.roomId);

    this.beService.getImagesInformation(this.roomId).subscribe((data: any) => {
      this.images = data

      this.imageForm.patchValue({
        imageLink1: this.images.imagesLinks.imageLink1,
        imageLink2: this.images.imagesLinks.imageLink2,
        imageLink3: this.images.imagesLinks.imageLink3,
        imageLink4: this.images.imagesLinks.imageLink4
      })
    })




  }

  onClickUpdateImageInformation() {
    console.log("onClickUpdateImageInformation Called..");
    console.log(this.imageForm.value);

    this.beService.updateImagesInformation(this.imageForm.value, this.roomId).subscribe((data: any) => {
      console.log("Room Information Added!!");
      // console.log(data);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Image Information has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/sellerRoomDescription', this.roomId]);
    })


    this.imageForm.reset();
  }

}
