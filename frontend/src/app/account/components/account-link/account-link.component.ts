import { ChangeDetectorRef, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountState } from '../../account.state';

@Component({
  selector: 'account-link',
  templateUrl: './account-link.component.html',
})
export class AccountLinkComponent {
  @Select(AccountState.isAuthenticated)
  declare isAuthenticated$: Observable<boolean>;
  declare dataTip: string;
  declare routerLink: string;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      this.dataTip = isAuthenticated ? 'Mon compte' : 'Se connecter';
      this.routerLink = isAuthenticated ? '/account' : '/account/login';
      this.cdRef.detectChanges();
    });
  }
}
