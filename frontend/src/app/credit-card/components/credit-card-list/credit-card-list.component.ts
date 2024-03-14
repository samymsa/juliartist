import { Component } from '@angular/core';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
})
export class CreditCardListComponent {
  creditCards$ = this.creditCardService.getCreditCards();

  constructor(private creditCardService: CreditCardService) {
    this.creditCardService.getCreditCards().subscribe((creditCards) => {
      console.log('list', creditCards);
    });
  }
}
