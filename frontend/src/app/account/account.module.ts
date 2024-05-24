import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { AccountRoutingModule } from './account-routing.module';
import { AccountState } from './account.state';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountLinkComponent } from './components/account-link/account-link.component';
import { AccountLoginComponent } from './components/account-login/account-login.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';
import { AccountPageComponent } from './pages/account/account-page.component';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AccountPageComponent,
    AccountLinkComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    AccountDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    NgxsModule.forFeature([AccountState]),
  ],
  exports: [AccountLinkComponent],
  providers: [AccountService],
})
export class AccountModule {}
