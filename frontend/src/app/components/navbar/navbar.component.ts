import { Component } from '@angular/core';
import { ShoppingCartModule } from '../../shopping-cart/shopping-cart.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ShoppingCartModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
