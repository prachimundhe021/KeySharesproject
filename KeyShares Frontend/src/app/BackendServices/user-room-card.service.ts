import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoomCardService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }


  //Getting all Sata By Id
  getAllRoomDetails() {
    console.log("User getAllRoomDetails Called..");
    return this.http.get(`${this.baseUrl}/roomInformation`);
  }
}
