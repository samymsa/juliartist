import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from '../../../models/product';
import { AddToCart } from '../../shopping-cart.actions';

@Component({
  selector: 'app-shopping-cart-add',
  templateUrl: './shopping-cart-add.component.html',
})
export class ShoppingCartAddComponent {
  @Input() declare product: Product;

  constructor(private store: Store) {}

  addToCart() {
    this.store.dispatch(new AddToCart(this.product));
  }
}
