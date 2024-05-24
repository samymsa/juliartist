import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FormErrorService } from '../../../core/services/form-error.service';
import { SetAccount } from '../../account.actions';
import { AccountService } from '../../services/account.service';
import { passwordMatchValidator } from '../../validators/password-match.validator';

@Component({
  selector: 'account-register',
  templateUrl: './account-register.component.html',
})
export class AccountRegisterComponent {
  constructor(
    protected fes: FormErrorService,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private store: Store,
  ) {}

  loading = false;

  registerForm = this.formBuilder.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required]],
    },
    {
      validators: passwordMatchValidator,
    },
  );

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.register(this.registerForm.value).subscribe({
      next: (response) => {
        this.store.dispatch(new SetAccount(response.user));
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.registerForm.setErrors({ unknown: true });
        this.loading = false;
      },
    });
  }
}
