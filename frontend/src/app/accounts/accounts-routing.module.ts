import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsLoginComponent } from './components/accounts-login/accounts-login.component';
import { AccountsRegisterComponent } from './components/accounts-register/accounts-register.component';

const routes: Routes = [
  {
    path: 'login',
    component: AccountsLoginComponent,
  },
  {
    path: 'register',
    component: AccountsRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
