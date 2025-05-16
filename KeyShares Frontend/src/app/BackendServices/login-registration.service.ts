import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  //Add Registration Data
  addRegistrationData(registration: any) {
    console.log("addRegistrationData Called..");
    console.log(registration);
    return this.http.post(`${this.baseUrl}/registration`, registration);
  }


  //Show Login Data
  showLoginData(emailId: any, passWord: any) {
    console.log("showLoginData Method Called");
    return this.http.get(`${this.baseUrl}/login/${emailId}/${passWord}`);
  }



  //check EmailId and Username
  checkRegistrationDetails(userName: any, emailId: any) {
    console.log("checkRegistrationDetails Called");
    return this.http.get(`${this.baseUrl}/registerCheck/${userName}/${emailId}`);
  }

}
