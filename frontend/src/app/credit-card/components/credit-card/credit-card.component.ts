import { Component, Input } from '@angular/core';
import { CreditCard } from '../../models/credit-card';

@Component({
  selector: 'app-credit-card, [app-credit-card]',
  templateUrl: './credit-card.component.html',
})
export class CreditCardComponent {
  @Input() declare card: CreditCard;
}
