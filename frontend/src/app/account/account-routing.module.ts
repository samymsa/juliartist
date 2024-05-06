import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountLoginComponent } from './components/account-login/account-login.component';
import { AccountLogoutComponent } from './components/account-logout/account-logout.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';
import { AccountPageComponent } from './pages/account/account-page.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full',
      },
      {
        path: 'details',
        component: AccountDetailsComponent,
      },
      {
        path: 'payment-methods',
        loadChildren: () =>
          import('../credit-card/credit-card.module').then(
            (m) => m.CreditCardModule,
          ),
      },
    ],
  },
  {
    path: 'login',
    component: AccountLoginComponent,
  },
  {
    path: 'logout',
    component: AccountLogoutComponent,
  },
  {
    path: 'register',
    component: AccountRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
