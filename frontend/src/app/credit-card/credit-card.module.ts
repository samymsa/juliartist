import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditCardService } from './services/credit-card.service';

@NgModule({
  declarations: [
    CreditCardComponent,
    CreditCardListComponent,
    CreditCardFormComponent,
  ],
  imports: [ReactiveFormsModule, CommonModule],
  providers: [CreditCardService],
})
export class CreditCardModule {}
