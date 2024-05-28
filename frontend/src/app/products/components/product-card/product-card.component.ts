import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() declare product: Product;
}
