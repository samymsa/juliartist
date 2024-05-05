import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountState } from '../../account.state';

@Component({
  selector: 'account-page',
  templateUrl: './account-page.component.html',
})
export class AccountPageComponent {
  @Select(AccountState.isAuthenticated)
  declare isAuthenticated$: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/account/login']);
      }
    });
  }
}
