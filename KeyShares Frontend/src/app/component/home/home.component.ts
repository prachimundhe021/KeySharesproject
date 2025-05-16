import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { UserRoomCardService } from '../../BackendServices/user-room-card.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  constructor(private router: Router) { }

  onClickSearch() {
    this.router.navigate(['/userRoomCard'])
  }
}
