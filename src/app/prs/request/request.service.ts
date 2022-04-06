import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl: string = "http://localhost:5000/api/requests";

  constructor(
    private http: HttpClient
  ) { }

  reviews(userId: number): Observable<Request[]> {
    return this.http.get(`${this.baseUrl}/reviews/${userId}`) as Observable<Request[]>;
  }
  list(): Observable<Request[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Request[]>;
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Request>;
  }
  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseUrl}`, request) as Observable<Request>;
  }
  review(request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/review/${request.id}`, request) as Observable<any>;
  }
  approve(request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/approve/${request.id}`, request) as Observable<any>;
  }
  reject(request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/reject/${request.id}`, request) as Observable<any>;
  }
  change(request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/${request.id}`, request) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<Request>;
  }
}
