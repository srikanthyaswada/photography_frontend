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

  updateBirthday(eventId: string, formData: FormData) {
    return this.http.put(`http://localhost:3007//birthday/update${eventId}`, formData);
  }

  deleteBirthday(eventId: string, body: any) {
    return this.http.request('delete', `http://localhost:3007//birthday/delete${eventId}`, {
      body,
    });
  }
  updateTraditional(eventId: string, formData: FormData) {
    return this.http.put(`http://localhost:3007/traditionalWedding/update/${eventId}`, formData);
  }

  deleteTraditional(eventId: string, body: any) {
    return this.http.request(
      'delete',
      `http://localhost:3007/traditionalWedding/delete/${eventId}`,
      {
        body,
      },
    );
  }
  updateBusiness(eventId: string, formData: FormData) {
    return this.http.put(`http://localhost:3007/businessMeetup/update/${eventId}`, formData);
  }

  deleteBusiness(eventId: string, body: any) {
    return this.http.request('delete', `http://localhost:3007/businessMeetup/delete/${eventId}`, {
      body,
    });
  }
  updateCandid(eventId: string, formData: FormData) {
    return this.http.put(`http://localhost:3007/candidWedding/update/${eventId}`, formData);
  }

  deleteCandid(eventId: string, body: any) {
    return this.http.request('delete', `http://localhost:3007/candidWedding/delete/${eventId}`, {
      body,
    });
  }
  updateCinematic(eventId: string, formData: FormData) {
    return this.http.put(`http://localhost:3007/cinematicWedding/update/${eventId}`, formData);
  }

  deleteCinematic(eventId: string, body: any) {
    return this.http.request('delete', `http://localhost:3007/cinematicWedding/delete/${eventId}`, {
      body,
    });
  }
  updateNewborn(eventId: string, formData: FormData) {
    return this.http.put(`http://localhost:3007/newbornShoot/update/${eventId}`, formData);
  }

  deleteNewborn(eventId: string, body: any) {
    return this.http.request('delete', `http://localhost:3007/newbornShoot/delete/${eventId}`, {
      body,
    });
  }
  updateProduct(eventId: string, formData: FormData) {
    return this.http.put(`http://localhost:3007/productLaunches/update/${eventId}`, formData);
  }

  deleteProduct(eventId: string, body: any) {
    return this.http.request('delete', `http://localhost:3007/productLaunches/delete/${eventId}`, {
      body,
    });
  }
  createPackage(data: any) {
    return this.http.post('http://localhost:3007/packages/add', data);
  }

  updateRegular(eventId: string, formData: FormData) {
    return this.http.put(`http://localhost:3007/regularPrewedding/update/${eventId}`, formData);
  }

  deleteRegular(eventId: string, body: any) {
    return this.http.request(
      'delete',
      `http://localhost:3007/regularPrewedding/delete/${eventId}`,
      {
        body,
      },
    );
  }
  getPackagesByEventName(eventName: string) {
    return this.http.get<any>(
      `http://localhost:3007/packages/event/${encodeURIComponent(eventName)}`,
    );
  }
  packageDelete(id: string) {
    return this.http.delete(`http://localhost:3007/packages/delete/${id}`);
  }
  packageUpdate(id: string, data: any) {
    return this.http.put(`http://localhost:3007/packages/update/${id}`, data);
}
}
