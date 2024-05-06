import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CreditCard } from '../models/credit-card';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  constructor(private http: HttpClient) {}

  getCreditCards(query: any) {
    return this.http.get<CreditCard[]>(environment.backendCreditCards, {
      params: query,
    });
  }

  add(creditCard: any) {
    return this.http.post(environment.backendCreditCards, creditCard);
  }

  delete(id: string) {
    return this.http.delete(`${environment.backendCreditCards}/${id}`);
  }
}
