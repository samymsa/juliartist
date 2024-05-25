import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FormErrorService } from '../../../core/services/form-error.service';
import { SetAccount } from '../../account.actions';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'account-login',
  templateUrl: './account-login.component.html',
})
export class AccountLoginComponent {
  constructor(
    protected fes: FormErrorService,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private store: Store,
  ) {}

  loading = false;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const account: Partial<Account> = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    };

    this.accountService.login(account).subscribe({
      next: (response) => {
        this.store.dispatch(new SetAccount(response.user));
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.loginForm.setErrors({ invalidCredentials: true });
        this.loading = false;
      },
    });
  }
}
