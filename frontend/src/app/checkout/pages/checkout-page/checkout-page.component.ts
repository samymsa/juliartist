import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountState } from '../../../account/account.state';
import { FormErrorService } from '../../../core/services/form-error.service';
import { CreditCardService } from '../../../credit-card/services/credit-card.service';
import { ClearCart } from '../../../shopping-cart/shopping-cart.actions';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'checkout-page',
  templateUrl: './checkout-page.component.html',
})
export class CheckoutPageComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store,
    protected fes: FormErrorService,
    private checkoutService: CheckoutService,
    private creditCardService: CreditCardService,
  ) {}

  loading = false;
  mainErrorMessage = '';
  @ViewChild('successModal') successModal!: ElementRef;

  form = this.fb.group({
    delivery: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
    }),
    payment: this.fb.group({
      creditCardNumber: ['', Validators.required],
    }),
  });

  creditCards$ = this.creditCardService.getCreditCards();

  @Select(AccountState.getAccount)
  declare account$: Observable<any>;

  ngOnInit(): void {
    this.account$.subscribe((account) => {
      this.form.patchValue({
        delivery: account,
      });
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.checkoutService.checkout(this.form.value).subscribe({
      next: () => {
        this.mainErrorMessage = '';
        this.store.dispatch(new ClearCart());
        this.loading = false;
        this.successModal.nativeElement.showModal();
      },
      error: (e) => {
        this.mainErrorMessage = this.fes.getErrorMessage(e.error.message);
        this.loading = false;
      },
    });
  }
}
