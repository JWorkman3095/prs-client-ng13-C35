import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system.service';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  //baseUrl: string = "http://doudsystems.net/prsdb/api/Requestlines";
  get baseUrl() { return `${this.sys.baseUrl}/api/requestlines`}


  constructor(
    private http: HttpClient,
    private sys: SystemService
  ) { }

  get(id: number): Observable<Requestline> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Requestline>;
  }
  create(Requestline: Requestline): Observable<Requestline> {
    return this.http.post(`${this.baseUrl}`, Requestline) as Observable<Requestline>;
  }
  change(Requestline: Requestline): Observable<any> {
    return this.http.put(`${this.baseUrl}/${Requestline.id}`, Requestline) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<Requestline>;
  }
}
