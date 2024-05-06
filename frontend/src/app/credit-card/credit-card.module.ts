import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { InputErrorDirective } from './directives/input-error.directive';
import { CreditCardService } from './services/credit-card.service';

@NgModule({
  declarations: [
    CreditCardComponent,
    CreditCardListComponent,
    CreditCardFormComponent,
    InputErrorDirective,
  ],
  imports: [CreditCardRoutingModule, ReactiveFormsModule, CommonModule],
  providers: [CreditCardService],
})
export class CreditCardModule {}
