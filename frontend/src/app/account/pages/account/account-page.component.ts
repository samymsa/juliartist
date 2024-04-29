import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetAccount } from '../../account.actions';
import { AccountState } from '../../account.state';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'account',
  templateUrl: './account-page.component.html',
  providers: [AccountService],
})
export class AccountPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private store: Store,
  ) {}

  loading = false;
  success = false;

  updateForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
  });

  @Select(AccountState.isAuthenticated)
  declare isAuthenticated$: Observable<boolean>;

  @Select(AccountState.getAccount)
  declare account$: Observable<any>;

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/account/login']);
      }
    });

    this.account$.subscribe((account) => {
      console.log(account);
      this.updateForm.patchValue(account);
    });
  }

  onSubmit(): void {
    if (this.updateForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .updateAccount(this.updateForm.value)
      .subscribe((response) => {
        this.store.dispatch(new SetAccount(response.user));
        this.loading = false;
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 2000);
      });
  }
}
