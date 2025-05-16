import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ImagesInformationService } from '../../BackendServices/images-information.service';

@Component({
  selector: 'app-image-data',
  imports: [RouterLink, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './image-data.component.html',
  styleUrl: './image-data.component.css'
})
export class ImageDataComponent implements OnInit {

  imageForm!: FormGroup

  roomId: any;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private beService: ImagesInformationService) {
  }

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('roomId');
    console.log(this.roomId);

    // this.roomForm.patchValue({
    //   sellerId: this.sellerId
    // })

    this.imageForm = this.formBuilder.group({
      // sellerId: new FormControl(this.sellerId),
      imageLink1: new FormControl(''),
      imageLink2: new FormControl(''),
      imageLink3: new FormControl(''),
      imageLink4: new FormControl('')
    })

  }

  onClickImageInformation() {
    console.log("onClickRoomInformation Called..");
    console.log(this.imageForm.value);

    this.beService.addImagesInformation(this.imageForm.value, this.roomId).subscribe((data: any) => {
      console.log("Room Information Added!!");
      console.log(data);
      this.imageForm.reset();
      this.router.navigate(['/sellerRoomDescription', this.roomId]);
    })

  }
}
