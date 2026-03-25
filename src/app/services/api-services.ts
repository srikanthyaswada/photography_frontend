import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  constructor(private http: HttpClient) {}

  LoginUser(data: any) {
    return this.http.post(`http://localhost:3007/admin/login`, data);
  }
  getAllTraditional() {
    return this.http.get<any>('http://localhost:3007/traditionalWedding/get');
  }

  getAllCandid() {
    return this.http.get<any>('http://localhost:3007/candidWedding/get');
  }
  getAllBirthday() {
    return this.http.get<any>('http://localhost:3007/birthday/get');
  }
  getAllBusinessMeetup() {
    return this.http.get<any>('http://localhost:3007/businessMeetup/get');
  }
  getAllCinematic() {
    return this.http.get<any>('http://localhost:3007/cinematicWedding/get');
  }
  getAllNewborn() {
    return this.http.get<any>('http://localhost:3007/newbornShoot/get');
  }
  getAllProducts() {
    return this.http.get<any>('http://localhost:3007/productLaunches/get');
  }
  getAllRegular() {
    return this.http.get<any>('http://localhost:3007/regularPrewedding/get');
  }
  uploadTraditional(data: FormData): Observable<any> {
    return this.http.post(`http://localhost:3007/traditionalWedding/upload`, data);
  }
  getEventTypes() {
    return this.http.get<any>('http://localhost:3007/eventType/get');
  }
  uploadRegular(data: FormData): Observable<any> {
    return this.http.post('http://localhost:3007/regularPrewedding/upload', data);
  }
  uploadProduct(data: FormData): Observable<any> {
    return this.http.post('http://localhost:3007/productLaunches/upload', data);
  }
  uploadNewBorn(data: FormData): Observable<any> {
    return this.http.post('http://localhost:3007/newbornShoot/upload', data);
  }
  uploadCinematic(data: FormData): Observable<any> {
    return this.http.post('http://localhost:3007/cinematicWedding/upload', data);
  }
  uploadCandid(data: FormData): Observable<any> {
    return this.http.post('http://localhost:3007/candidWedding/upload', data);
  }
  uploadBusiness(data: FormData): Observable<any> {
    return this.http.post('http://localhost:3007/businessMeetup/upload', data);
  }
  uploadBirthday(data: FormData): Observable<any> {
    return this.http.post('http://localhost:3007/birthday/upload', data);
  }
}
