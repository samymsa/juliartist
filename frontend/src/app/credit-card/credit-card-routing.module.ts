import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CreditCardListComponent,
  },
  {
    path: 'add',
    component: CreditCardFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCardRoutingModule {}
