import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoomAllInformationService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }


  //Getting all Sata By Id
  getSellerOrRoomDescription(roomId: any) {
    console.log("User getAllInformation Called..");
    return this.http.get(`${this.baseUrl}/allInformation/${roomId}`);
  }
}
