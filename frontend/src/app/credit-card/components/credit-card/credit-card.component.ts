import { Component, Input } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-credit-card, [app-credit-card]',
  templateUrl: './credit-card.component.html',
})
export class CreditCardComponent {
  @Input() declare card: CreditCard;

  constructor(private creditCardService: CreditCardService) {}

  onDelete() {
    this.creditCardService.delete(this.card.number);
  }
}
