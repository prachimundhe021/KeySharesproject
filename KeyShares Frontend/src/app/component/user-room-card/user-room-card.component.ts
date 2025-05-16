import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserRoomCardService } from '../../BackendServices/user-room-card.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-room-card',
  imports: [NavbarComponent, ReactiveFormsModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './user-room-card.component.html',
  styleUrl: './user-room-card.component.css'
})
export class UserRoomCardComponent implements OnInit {

  allInformation: any[] = []

  islogin = true
  username: any

  constructor(private beService: UserRoomCardService, private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('user')
    if (this.username !== '') {
      this.islogin = false;
    } else {
      this.islogin = true;
    }

    this.beService.getAllRoomDetails().subscribe((data: any) => {
      this.allInformation = data
    })
  }


  onClickViewDetails(roomId: any) {
    this.router.navigate(['/userRoomAllInform/', roomId])
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

  onClickLogin() {
    if (this.username == '') {
      console.log("Null Value");
      this.router.navigate(['/login']);
    } else {
      console.log("Username");
    }
  }


}



// html: `
//         <div style="text-align: left; font-size: 1rem;">
//           <p><strong>📞 Phone:</strong> +91 '{{information.sellerInformation.mobileNumber}}'</p>
//           <p><strong>✉️ Email:</strong> allInformation.sellerInformation.emailId</p>
//           <p><strong>🏢 Address:</strong> allInformation.address, allInformation.city</p>
//         </div>
//       `,
