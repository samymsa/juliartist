import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormErrorService } from '../../../core/services/form-error.service';
import { SetAccount } from '../../account.actions';
import { AccountState } from '../../account.state';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'account-details',
  templateUrl: './account-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent {
  constructor(
    protected fes: FormErrorService,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private store: Store,
    private cd: ChangeDetectorRef,
  ) {}

  loading = false;
  success = false;

  form = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    postalCode: [''],
    city: [''],
  });

  @Select(AccountState.getAccount)
  declare account$: Observable<any>;

  ngOnInit(): void {
    this.account$.subscribe((account) => {
      this.form.patchValue(account);
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    const account: Partial<Account> = {
      firstName: this.form.value.firstName!,
      lastName: this.form.value.lastName!,
      address: this.form.value.address!,
      postalCode: this.form.value.postalCode!,
      city: this.form.value.city!,
    };

    this.accountService.updateAccount(account).subscribe({
      next: (response) => {
        this.store.dispatch(new SetAccount(response.user));
        this.loading = false;
        this.success = true;
        setTimeout(() => {
          this.success = false;
          this.cd.markForCheck();
        }, 2000);
        this.cd.markForCheck();
      },
      error: (error) => {
        this.form.setErrors({ unknown: true });
        this.loading = false;
        this.cd.markForCheck();
      },
    });
  }
}
