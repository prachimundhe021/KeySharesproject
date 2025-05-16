import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginRegistrationService } from '../../BackendServices/login-registration.service';
import { RoomInformationService } from '../../BackendServices/room-information.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  sign = '@'

  loginForm!: FormGroup

  loginDataRole: any

  roomId: any

  constructor(private formBuilder: FormBuilder, private router: Router, private beService: LoginRegistrationService, private beServiceRoomId: RoomInformationService) {
    this.loginForm = formBuilder.group({
      emailId: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      passWord: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/)])
    })
  }

  flag = 0;

  onClickLogin(event: Event): void {
    event.preventDefault();

    console.log("onClickLogin Called..");
    console.log(this.loginForm.value);

    const email = this.loginForm.value.emailId
    const pass = this.loginForm.value.passWord

    this.beService.showLoginData(email, pass).subscribe((data: any) => {
      console.log(data);
      this.loginDataRole = data

      localStorage.setItem('user', data.userName)

      if (this.loginDataRole.role === 'seller') {
        this.flag = 1;
        this.beServiceRoomId.getRoomId(this.loginForm.value.emailId).subscribe((data2: any) => {
          console.log("Room Id", data2);
          this.roomId = data2;
          console.log('Room ID:', this.roomId);

          console.log("Admin Login Successfully!!");
          this.router.navigate(['/sellerRoomDescription', this.roomId]);
        })
      } else if (this.loginDataRole.role === 'buyer') {
        this.flag = 1;
        console.log("User Login Successfully!!");
        this.router.navigate(['/home']);
      }
      else {
        console.log("Data Not Exist!! or Incorrect Username & Password!!");
        this.router.navigate(['/register']);
      }



      console.log(this.flag);

      if (this.flag == 1) {
        Swal.fire({
          title: "Login Successfully!!",
          icon: "success",
          draggable: true,
          showCloseButton: true
        });
      } else {
        Swal.fire({
          title: "Incorrect Email or Password",
          icon: "error",
          showCloseButton: true,
        });
      }
    }, ((error) => {
      alert("register...")
    }))




  }

}
