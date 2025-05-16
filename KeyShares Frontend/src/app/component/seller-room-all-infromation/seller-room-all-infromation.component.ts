import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SellerRoomAllInformationService } from '../../BackendServices/seller-room-all-information.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seller-room-all-infromation',
  imports: [CommonModule],
  templateUrl: './seller-room-all-infromation.component.html',
  styleUrl: './seller-room-all-infromation.component.css'
})
export class SellerRoomAllInfromationComponent implements OnInit {

  sign = '@';

  constructor(private beService: SellerRoomAllInformationService, private route: ActivatedRoute, private router: Router) { }

  information: any
  roomId: any
  sellerId: any

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('roomId');
    console.log(this.roomId);

    console.log("Description Page");

    this.beService.getSellerOrRoomDescription(this.roomId).subscribe((data: any) => {
      this.information = data
      console.log("Data: ", data);
      this.sellerId = this.information.sellerInformation.sellerId;
      console.log("SellerId", this.sellerId);
    })


  }

  username = localStorage.getItem('username');

  onClickLogout() {
    Swal.fire({
      icon: "success",
      title: "Logged Out Successfully!!",
    });
    localStorage.removeItem('user')
    this.router.navigate(['/home']);
  }

  onClickUpdate() {
    Swal.fire({
      title: "Which Information You Want To Update",
      confirmButtonText: " Seller ",
      denyButtonText: " Room ",
      cancelButtonText: " Images ",
      showCloseButton: true,
      showConfirmButton: true,
      showDenyButton: true,
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Currently! We are Working On it.", "", "info");
        // this.router.navigate(['/updateSellerInformation'], { queryParams: { gender: this.information.sellerInformation.gender, roomId: this.roomId, emailId: this.information.sellerInformation.gender, sellerId: this.sellerId } });
      } else if (result.isDenied) {
        Swal.fire("Displaying Room Information", "", "success");
        this.router.navigate(['/updateRoomInformation'], { queryParams: { gender: this.information.sellerInformation.gender, roomId: this.roomId, sellerId: this.sellerId } })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Displaying Images Information", "", "success");
        this.router.navigate(['/updateImageLinks', this.roomId]);
      }
    });
  }

  onClickDelete() {
    Swal.fire({
      icon: "error",
      title: "Currently! We are Working On it.",
    });
  }


}
