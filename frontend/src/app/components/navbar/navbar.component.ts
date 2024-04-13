import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartModule } from '../../shopping-cart/shopping-cart.module';
import { AccountsModule } from '../../accounts/accounts.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ShoppingCartModule, AccountsModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
