import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreditCardService } from '../../services/credit-card.service';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  providers: [],
})
export class CreditCardFormComponent {
  form = this.fb.group({
    name: ['', [Validators.required]],
    number: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    expirationDate: [
      '',
      [Validators.required, Validators.pattern('^[0-9]{2}/[0-9]{2}$')],
    ],
    cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
  });

  constructor(
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
      cvv: this.form.get('cvv')?.value || '',
    };
    this.creditCardService.add(creditCard);
  }
}
