import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomInformationService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  //Add Room Information
  addRoomInformation(roomInformation: any, sellerId: any) {
    console.log("addRoomInformation Called..");
    console.log(roomInformation);
    console.log(sellerId);
    return this.http.post(`${this.baseUrl}/roomInformation/${sellerId}`, roomInformation);
  }


  getRoomId(emailId: any) {
    console.log(emailId);
    return this.http.get(`${this.baseUrl}/findingRoomId/${emailId}`);
  }



  getRoomInformation(roomId: any) {
    return this.http.get(`${this.baseUrl}/roomInformation/${roomId}`);
  }


  updateRoomInformation(roomInformation: any, sellerId: any) {
    console.log("updateRoomInformation Called..");
    console.log(roomInformation);
    console.log("Seller Id", sellerId);
    return this.http.put(`${this.baseUrl}/roomInformation/${sellerId}`, roomInformation);
  }
}
