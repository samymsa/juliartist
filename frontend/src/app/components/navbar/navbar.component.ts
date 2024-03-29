import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartModule } from '../../shopping-cart/shopping-cart.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ShoppingCartModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
