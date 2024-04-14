import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(environment.backendLogin, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(environment.backendRegister, data);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendProducts);
  }

  getCollections(): Observable<string[]> {
    return this.http.get<string[]>(environment.backendCollections);
  }
}
