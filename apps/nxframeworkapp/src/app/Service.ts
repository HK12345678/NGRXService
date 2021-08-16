import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from './Models/service.model';
@Injectable({
  providedIn: 'root',
})
export class RServicesService {
  constructor(private http: HttpClient) {}

  addService(service: Service): Observable<{ serviceType: string }> {
    return this.http.post<{ serviceType: string }>(
      `https://vue-completecourse.firebaseio.com/posts.json`,
      service
    );
  }  
}