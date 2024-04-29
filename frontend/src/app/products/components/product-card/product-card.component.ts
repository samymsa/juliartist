import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ShoppingCartModule } from '../../../shopping-cart/shopping-cart.module';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ShoppingCartModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() declare product: Product;
}
