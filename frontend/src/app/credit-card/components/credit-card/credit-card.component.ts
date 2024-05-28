import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-credit-card, [app-credit-card]',
  templateUrl: './credit-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditCardComponent {
  @Input() declare card: CreditCard;
  @Output() delete = new EventEmitter<void>();

  constructor(private creditCardService: CreditCardService) {}

  onDelete() {
    this.creditCardService.delete(this.card.number).subscribe(() => {
      this.delete.emit();
    });
  }
}
