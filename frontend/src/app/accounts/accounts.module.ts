import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsLinkComponent } from './components/accounts-link/accounts-link.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsLoginComponent } from './components/accounts-login/accounts-login.component';
import { AccountsRegisterComponent } from './components/accounts-register/accounts-register.component';

@NgModule({
  declarations: [
    AccountsLinkComponent,
    AccountsLoginComponent,
    AccountsRegisterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AccountsRoutingModule],
  exports: [AccountsLinkComponent],
})
export class AccountsModule {}
