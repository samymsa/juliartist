import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from '../../models/shopping-cart-item';
import { UpdateQuantity } from '../../shopping-cart.actions';
import { ShoppingCartState } from '../../shopping-cart.state';

@Component({
  selector: 'shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
})
export class ShoppingCartPageComponent {
  @Select(ShoppingCartState.getItems)
  declare items$: Observable<ShoppingCartItem[]>;

  @Select(ShoppingCartState.getTotalPrice)
  declare totalPrice$: Observable<number>;

  @Select(ShoppingCartState.getTotalQuantity)
  declare totalQuantity$: Observable<number>;

  constructor(private store: Store) {}
  n: number = NaN;

  incrementQuantity(item: ShoppingCartItem): void {
    this.updateQuantity(item, item.quantity + 1);
  }

  decrementQuantity(item: ShoppingCartItem): void {
    this.updateQuantity(item, item.quantity - 1);
  }

  updateQuantity(item: ShoppingCartItem, quantity: number): void {
    this.store.dispatch(new UpdateQuantity({ item, quantity }));
  }
}
