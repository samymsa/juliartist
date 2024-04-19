import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLoginComponent } from './components/account-login/account-login.component';
import { AccountLogoutComponent } from './components/account-logout/account-logout.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';

const routes: Routes = [
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
