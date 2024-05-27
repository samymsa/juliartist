import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class CheckoutService {
  constructor(private http: HttpClient) {}

  checkout(data: any): Observable<any> {
    return this.http.post(environment.backendCheckout, data);
  }
}
