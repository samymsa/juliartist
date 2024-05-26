import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountState } from '../../../account/account.state';
import { Account } from '../../../account/models/account';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
})
export class CreditCardListComponent {
  declare creditCards$: Observable<any>;

  account = this.store.selectSnapshot<Account | null>(AccountState.getAccount);

  constructor(
    private creditCardService: CreditCardService,
    private store: Store,
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    console.log('Account:', this.account);
    this.creditCards$ = this.creditCardService.getCreditCards({
      userId: this.account?.id || '',
    });
  }
}
