import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
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

  updateAccount(data: any): Observable<any> {
    return this.http.put(environment.backendUpdateAccount, data);
  }

  getProducts(query: any): Observable<Product[]> {
    return this.http
      .get<Product[]>(environment.backendProducts, { params: query })
      .pipe(share());
  }

  getCollections(): Observable<string[]> {
    return this.http
      .get<string[]>(environment.backendCollections)
      .pipe(share());
  }
}
