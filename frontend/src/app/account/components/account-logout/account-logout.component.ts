import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetAccessToken, SetAccount } from '../../account.actions';

@Component({
  selector: 'account-logout',
  templateUrl: './account-logout.component.html',
})
export class AccountLogoutComponent {
  constructor(
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new SetAccessToken(''));
    this.store.dispatch(new SetAccount(null));
    this.router.navigate(['/']);
  }
}
