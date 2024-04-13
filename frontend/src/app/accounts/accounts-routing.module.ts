import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsLoginComponent } from './components/accounts-login/accounts-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: AccountsLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
