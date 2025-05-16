import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRegistrationService } from '../../BackendServices/login-registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  sign = '@'

  registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private beService: LoginRegistrationService) {
    this.registerForm = formBuilder.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{6,8}$/)]),
      emailId: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      gender: new FormControl(''),
      // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
      passWord: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{6,8}$/)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{6,8}$/)]),
      role: new FormControl('')
    })

  }

  emailId: any
  gender: any
  check: any

  onClickRegister(event: Event): void {
    event.preventDefault();

    console.log("onClickRegister Called..");
    console.log(this.registerForm.value);

    this.emailId = this.registerForm.value.emailId;
    this.gender = this.registerForm.value.gender
    const username = this.registerForm.value.userName
    const email = this.registerForm.value.emailId

    this.beService.addRegistrationData(this.registerForm.value).subscribe((data: any) => {
      console.log(data);
      this.check = data;

      console.log(this.check);

      if (this.check == 1) {
        console.log("Email already Registered!!");
        Swal.fire({
          title: "Email Already Registered!!",
          icon: "error",
          draggable: true,
          showCloseButton: true
        });
      } else {
        if (this.registerForm.value.role === 'seller') {
          console.log("Seller");
          this.registerForm.reset();

          Swal.fire({
            title: "Registered Successfully!!",
            icon: "success",
            draggable: true,
            showCloseButton: true
          });

          this.router.navigate(['/sellerInform'], { queryParams: { gender: this.gender, emailId: this.emailId } });
        } else {
          console.log("Buyer");
          this.registerForm.reset();

          Swal.fire({
            title: "Registered Successfully!!",
            icon: "success",
            draggable: true,
            showCloseButton: true
          });

          this.router.navigate(['/login'])
        }
      }
    })

  }

}
