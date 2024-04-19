import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'account-login',
  templateUrl: './account-login.component.html',
  providers: [ApiService],
})
export class AccountLoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) {}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.apiService.login(this.loginForm.value).subscribe((response) => {
      console.log('Login response: ', response);
      this.router.navigate(['/']);
    });
  }
}
