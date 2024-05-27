import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditCardModule } from '../credit-card/credit-card.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutService } from './services/checkout.service';

@NgModule({
  declarations: [CheckoutPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckoutRoutingModule,
    CreditCardModule,
  ],
  providers: [CheckoutService],
})
export class CheckoutModule {}
