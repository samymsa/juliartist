import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'accounts-login',
  templateUrl: './accounts-login.component.html',
})
export class AccountsLoginComponent {
  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    console.warn('Your order has been submitted', this.loginForm.value);
  }
}
