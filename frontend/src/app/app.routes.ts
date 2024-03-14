import { Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CreditCardListComponent } from './credit-card/components/credit-card-list/credit-card-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'credit-cards', pathMatch: 'full' },
  { path: 'products', component: ProductsPageComponent },
  { path: 'credit-cards', component: CreditCardListComponent },
];
