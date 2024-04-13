import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../validators/password-match.validator';

@Component({
  selector: 'accounts-register',
  templateUrl: './accounts-register.component.html',
})
export class AccountsRegisterComponent {
  constructor(private formBuilder: FormBuilder) {}

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

  onSubmit(): void {}
}
