import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerInformationService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  //Add Seller Information
  addSellerInformation(sellerInformation: any, emailId: any, gender: any) {
    console.log("addSellerInformation Called..");
    console.log(sellerInformation);
    console.log(emailId);

    return this.http.post(`${this.baseUrl}/sellerInformation/${emailId}/${gender}`, sellerInformation);
  }


  getSellerInformation(roomId: any) {
    console.log("getSellerInformation Called");
    return this.http.get(`${this.baseUrl}/roomInformation/${roomId}`);
  }

  updateSellerInformation(sellerInformation: any, emailId: any, gender: any, roomId: any, sellerId: any) {
    console.log("updateSellerInformation Called..");
    return this.http.put(`${this.baseUrl}/sellerInformation/${roomId}/${emailId}/${gender}`, sellerInformation);
  }
}
