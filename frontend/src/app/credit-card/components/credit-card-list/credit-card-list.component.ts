import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AccountState } from '../../../account/account.state';
import { Account } from '../../../account/models/account';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditCardListComponent {
  creditCards$ = this.creditCardService.getCreditCards();
  account = this.store.selectSnapshot<Account | null>(AccountState.getAccount);

  constructor(
    private creditCardService: CreditCardService,
    private store: Store,
  ) {}

  refresh() {
    this.creditCards$ = this.creditCardService.getCreditCards();
  }
}
