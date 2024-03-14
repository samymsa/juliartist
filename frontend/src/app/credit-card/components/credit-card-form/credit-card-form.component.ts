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
    name: ['', [Validators.required, Validators.pattern('[\\S\\s]+[\\S]+')]],
    number: ['', [Validators.required, Validators.pattern('\\d{16}')]],
    expirationDate: [
      '',
      [Validators.required, Validators.pattern('\\d{2}/\\d{2}')],
    ],
    cvv: ['', [Validators.required, Validators.pattern('\\d{3}')]],
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
