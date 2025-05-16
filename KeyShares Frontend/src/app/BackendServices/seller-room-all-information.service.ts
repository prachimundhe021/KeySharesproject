import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerRoomAllInformationService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }


  //Getting all Sata By Id
  getSellerOrRoomDescription(roomId: any) {
    console.log("getSellerOrRoomDescription Called..");
    return this.http.get(`${this.baseUrl}/allInformation/${roomId}`);
  }
}
