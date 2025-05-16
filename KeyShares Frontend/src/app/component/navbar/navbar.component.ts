import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  username: any;
  islogin = true;

  private prevScrollpos: number = window.scrollY;

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('user')
    if (this.username) {
      this.islogin = false;
    } else {
      this.islogin = true;
    }
    this.initializeScrollBehavior();
  }


  onRedirectRegister() {
    console.log("onRedirectRegister() Method Called..");
    this.router.navigate(['/register']);
  }


  initializeScrollBehavior(): void {
    window.onscroll = () => {
      const currentScrollPos = window.scrollY;

      const navbarElement = this.el.nativeElement.querySelector('#navbar');

      if (this.prevScrollpos > currentScrollPos) {
        this.renderer.setStyle(navbarElement, 'top', '0');
      } else {
        this.renderer.setStyle(navbarElement, 'top', '-8.5%');
      }

      this.prevScrollpos = currentScrollPos;
    };
  }

  onOptionChange(value: string): void {
    if (value === 'logout') {
      sessionStorage.removeItem('username'); // Clear session on logout
      this.router.navigate(['/signin']); // Redirect to signin page
    }
  }

  logout() {
    this.islogin = true
    this.router.navigate(['/home']);
    localStorage.removeItem('user')
  }

}
