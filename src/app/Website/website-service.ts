import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsiteService {
  constructor(private http: HttpClient) {}
  
   createContact(contactData: any): Observable<any> {
    return this.http.post(`http://localhost:3007/contact/create`, contactData);
  }
   createQuotation(data: any): Observable<any> {
    return this.http.post(`http://localhost:3007/quotations/create`, data);
  }
}
