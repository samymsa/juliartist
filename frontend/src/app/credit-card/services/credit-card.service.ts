import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CreditCard } from '../models/credit-card';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  private creditCards: BehaviorSubject<CreditCard[]> = new BehaviorSubject([
    {
      name: 'John Doe',
      number: '1234567890123456',
      expirationDate: '12/24',
      ccv: '123',
    },
  ]);

  getCreditCards() {
    return this.creditCards.asObservable();
  }

  add(creditCard: CreditCard) {
    this.creditCards.next([...this.creditCards.getValue(), creditCard]);
  }

  delete(number: string) {
    const current = this.creditCards.getValue();
    this.creditCards.next(current.filter((card) => card.number !== number));
  }
}
