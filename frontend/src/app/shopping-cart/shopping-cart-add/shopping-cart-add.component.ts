import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToCart } from '../shopping-cart.actions';

@Component({
  selector: 'app-shopping-cart-add',
  templateUrl: './shopping-cart-add.component.html',
})
export class ShoppingCartAddComponent {
  constructor(private store: Store) {}

  addToCart() {
    this.store.dispatch(
      new AddToCart({
        title: 'NGXS Product',
        collection: 'Disney',
        price: 100,
      }),
    );
  }
}
