import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { SetAccount } from '../../account.actions';
import { Store } from '@ngxs/store';

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
    this.apiService.login(this.loginForm.value).subscribe((response) => {
      this.store.dispatch(new SetAccount(response.user));
      this.router.navigate(['/']);
    });
  }
}
