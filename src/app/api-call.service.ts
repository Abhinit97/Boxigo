import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  readonly ROOT_URL ;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://boxigo.in/sampleAPI.php';
   }

  get() {
    return this.http.get(`${this.ROOT_URL}`);
  }
}
