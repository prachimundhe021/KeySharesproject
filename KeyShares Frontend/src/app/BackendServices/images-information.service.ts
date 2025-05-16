import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesInformationService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  //Add Room Information
  addImagesInformation(imagesInformation: any, roomId: any) {
    console.log("addImagesInformation Called..");
    // console.log(imagesInformation);
    console.log(roomId);
    return this.http.post(`${this.baseUrl}/imageInformation/${roomId}`, imagesInformation);
  }


  getImagesInformation(roomId: any) {
    console.log("getImagesInformation Called");
    return this.http.get(`${this.baseUrl}/roomInformation/${roomId}`);
  }

  updateImagesInformation(imagesInformation: any, roomId: any) {
    console.log("addImagesInformation Called..");
    // console.log(imagesInformation);
    console.log(roomId);
    return this.http.put(`${this.baseUrl}/imageInformation/${roomId}`, imagesInformation);
  }
}


