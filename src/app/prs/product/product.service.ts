import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system.service';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //baseUrl: string = "http://doudsystems.net/prsdb/api/products";
  get baseUrl() { return `${this.sys.baseUrl}/api/products`}


  constructor(
    private http: HttpClient,
    private sys: SystemService
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Product[]>;
  }
  get(id: number): Observable<Product> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Product>;
  }
  create(product: Product): Observable<Product> {
    return this.http.post(`${this.baseUrl}`, product) as Observable<Product>;
  }
  change(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/${product.id}`, product) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<Product>;
  }
}
