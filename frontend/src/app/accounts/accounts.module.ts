import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsLinkComponent } from './components/accounts-link/accounts-link.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountsLoginComponent } from './components/accounts-login/accounts-login.component';

@NgModule({
  declarations: [AccountsLinkComponent, AccountsLoginComponent],
  imports: [CommonModule, ReactiveFormsModule, AccountsRoutingModule],
  exports: [AccountsLinkComponent],
})
export class AccountsModule {}
