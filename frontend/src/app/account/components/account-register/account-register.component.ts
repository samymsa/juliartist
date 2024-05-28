import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FormErrorService } from '../../../core/services/form-error.service';
import { SetAccount } from '../../account.actions';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';
import { passwordMatchValidator } from '../../validators/password-match.validator';

@Component({
  selector: 'account-register',
  templateUrl: './account-register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountRegisterComponent {
  constructor(
    protected fes: FormErrorService,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private cd: ChangeDetectorRef,
  ) {}

  loading = false;
  redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/';

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: this.formBuilder.group(
      {
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
      },
      {
        validators: passwordMatchValidator,
      },
    ),
    firstName: [''],
    lastName: [''],
    address: [''],
    postalCode: [''],
    city: [''],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    const account: Partial<Account> = {
      email: this.form.value.email!,
      password: this.form.value.password!.password!,
      firstName: this.form.value.firstName!,
      lastName: this.form.value.lastName!,
      address: this.form.value.address!,
      postalCode: this.form.value.postalCode!,
      city: this.form.value.city!,
    };

    this.accountService.register(account).subscribe({
      next: (response) => {
        this.store.dispatch(new SetAccount(response.user));
        this.router.navigate([this.redirectUrl]);
      },
      error: (error) => {
        this.form.setErrors({ unknown: true });
        this.loading = false;
        this.cd.markForCheck();
      },
    });
  }
}
