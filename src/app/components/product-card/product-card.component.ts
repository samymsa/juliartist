import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() declare product: Product;
}
