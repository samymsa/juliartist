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
    this.accountService.login(this.loginForm.value).subscribe({
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

  public getErrorMessage(fieldName: string): string | null {
    const field = fieldName ? this.loginForm.get(fieldName) : this.loginForm;

    if (!field || !field.errors || !field.touched || !field.dirty) {
      return null;
    }

    if (field.errors['required']) {
      return 'Ce champ est obligatoire';
    }

    if (field.errors['email']) {
      return `L'email est incorrect`;
    }

    if (field.errors['invalidCredentials']) {
      return 'Les identifiants sont incorrects';
    }

    return null;
  }
}
