import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Product } from './models/product';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendProducts);
  }
  
  getCollections(): Observable<string[]> {
    return this.http.get<string[]>(environment.backendCollections);
  }
}
