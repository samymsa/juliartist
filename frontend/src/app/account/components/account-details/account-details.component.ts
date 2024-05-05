import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetAccount } from '../../account.actions';
import { AccountState } from '../../account.state';
import { AccountService } from '../../services/account.service';
import { passwordMatchValidator } from '../../validators/password-match.validator';

@Component({
  selector: 'account-details',
  templateUrl: './account-details.component.html',
})
export class AccountDetailsComponent {
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private store: Store,
  ) {}

  loading = false;
  success = false;

  updateForm = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      passwordConfirm: [''],
      firstName: [''],
      lastName: [''],
      address: [''],
      postalCode: [''],
      city: [''],
    },
    {
      validators: passwordMatchValidator,
    },
  );

  @Select(AccountState.getAccount)
  declare account$: Observable<any>;

  ngOnInit(): void {
    this.account$.subscribe((account) => {
      this.updateForm.patchValue(account);
    });
  }

  onSubmit(): void {
    if (this.updateForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .updateAccount(this.updateForm.value)
      .subscribe((response) => {
        this.store.dispatch(new SetAccount(response.user));
        this.loading = false;
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 2000);
      });
  }
}
