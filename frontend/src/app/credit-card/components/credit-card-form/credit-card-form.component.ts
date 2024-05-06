import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreditCardService } from '../../services/credit-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  providers: [],
})
export class CreditCardFormComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('([\\w-]+\\s?)+')]],
    number: ['', [Validators.required, Validators.pattern('\\d{16}')]],
    expirationDate: [
      '',
      [Validators.required, Validators.pattern('\\d{2}/\\d{2}')],
    ],
    ccv: ['', [Validators.required, Validators.pattern('\\d{3}')]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private creditCardService: CreditCardService,
  ) {
    this.fb = fb;
    this.creditCardService = creditCardService;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const creditCard = {
      name: this.form.get('name')?.value || '',
      number: this.form.get('number')?.value || '',
      expirationDate: this.form.get('expirationDate')?.value || '',
      ccv: this.form.get('ccv')?.value || '',
    };
    this.creditCardService.add(creditCard);
    this.router.navigate(['/account/payment-methods']);
  }
}
