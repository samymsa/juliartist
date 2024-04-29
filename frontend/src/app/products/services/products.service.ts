import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(query: any): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendProducts, {
      params: query,
    });
  }

  getCollections(): Observable<string[]> {
    return this.http.get<string[]>(environment.backendCollections);
  }
}
