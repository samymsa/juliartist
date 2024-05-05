import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetAccount } from '../../account.actions';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'account-login',
  templateUrl: './account-login.component.html',
})
export class AccountLoginComponent {
  constructor(
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
    this.accountService.login(this.loginForm.value).subscribe((response) => {
      this.store.dispatch(new SetAccount(response.user));
      this.router.navigate(['/']);
    });
  }
}
