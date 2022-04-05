import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:5000/api/users";

  constructor(
    private http: HttpClient
  ) { }

  login(usr: string, pwd: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${usr}/${pwd}`) as Observable<User>;
  }
  list(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.http.post(`${this.baseUrl}`, user) as Observable<User>;
  }
  change(user: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/${user.id}`, user) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<User>;
  }
}
