import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AccountState } from '../../../account/account.state';
import { Account } from '../../../account/models/account';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  providers: [],
})
export class CreditCardFormComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('([\\w-]+\\s?)+')]],
    number: ['', [Validators.required, Validators.pattern('\\d{16}')]],
    expirationDate: ['', [Validators.required]],
    ccv: ['', [Validators.required, Validators.pattern('\\d{3}')]],
  });

  account = this.store.selectSnapshot<Account | null>(AccountState.getAccount);

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private creditCardService: CreditCardService,
    private store: Store,
  ) {
    this.fb = fb;
    this.creditCardService = creditCardService;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const creditCard = {
      userId: this.account?.id || '',
      name: this.form.get('name')?.value || '',
      number: this.form.get('number')?.value || '',
      expirationDate: this.form.get('expirationDate')?.value || '',
      ccv: this.form.get('ccv')?.value || '',
    };

    this.creditCardService.add(creditCard).subscribe(() => {
      this.router.navigate(['/account/payment-methods']);
    });
  }
}
