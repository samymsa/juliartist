import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'accounts-login',
  templateUrl: './accounts-login.component.html',
})
export class AccountsLoginComponent {
  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  onSubmit(): void {
    console.warn('Your order has been submitted', this.loginForm.value);
  }
}
