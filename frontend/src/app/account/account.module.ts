import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AccountLinkComponent } from './components/account-link/account-link.component';
import { AccountLoginComponent } from './components/account-login/account-login.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';

@NgModule({
  declarations: [
    AccountLinkComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AccountRoutingModule],
  exports: [AccountLinkComponent],
})
export class AccountModule {}
