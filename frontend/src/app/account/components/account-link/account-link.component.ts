import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountState } from '../../account.state';

@Component({
  selector: 'app-account-link',
  templateUrl: './account-link.component.html',
})
export class AccountLinkComponent {
  @Select(AccountState.isAuthenticated)
  declare isAuthenticated$: Observable<boolean>;
}
