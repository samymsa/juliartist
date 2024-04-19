import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountModule } from '../../account/account.module';
import { ShoppingCartModule } from '../../shopping-cart/shopping-cart.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ShoppingCartModule, AccountModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
