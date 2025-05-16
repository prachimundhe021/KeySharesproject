import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerRoomAllInformationService } from '../../BackendServices/seller-room-all-information.service';
import { UserRoomAllInformationService } from '../../BackendServices/user-room-all-information.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-room-all-information',
  imports: [],
  templateUrl: './user-room-all-information.component.html',
  styleUrl: './user-room-all-information.component.css'
})
export class UserRoomAllInformationComponent implements OnInit {

  sign = '@';

  constructor(private beService: UserRoomAllInformationService, private route: ActivatedRoute, private router: Router) { }

  information: any
  roomId: any

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('roomId');
    console.log(this.roomId);

    console.log("Description Page");

    this.beService.getSellerOrRoomDescription(this.roomId).subscribe((data: any) => {
      this.information = data
      console.log(data);
    })
  }

  onClickBack() {
    this.router.navigate(['/userRoomCard'])
  }

  onClickEnquireNow(event: Event, contact: any): void {
    event.preventDefault(); // Prevent default anchor behavior if wrapped in <a>

    Swal.fire({
      title: 'Contact Seller',
      text: '+91 ' + contact,
      icon: 'info',
      confirmButtonText: 'OK',
      showCloseButton: true,
    });
  }

}
