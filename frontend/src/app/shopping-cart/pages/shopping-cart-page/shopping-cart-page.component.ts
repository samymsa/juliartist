import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from '../../models/shopping-cart-item';
import { UpdateQuantity } from '../../shopping-cart.actions';
import { ShoppingCartState } from '../../shopping-cart.state';

@Component({
  selector: 'shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartPageComponent {
  @Select(ShoppingCartState.getItems)
  declare items$: Observable<ShoppingCartItem[]>;

  @Select(ShoppingCartState.getTotalPrice)
  declare totalPrice$: Observable<number>;

  @Select(ShoppingCartState.getTotalQuantity)
  declare totalQuantity$: Observable<number>;

  minQuantity = 0;
  maxQuantity = 99;

  constructor(private store: Store) {}

  incrementQuantity(item: ShoppingCartItem): void {
    this.updateQuantity(item, item.quantity + 1);
  }

  decrementQuantity(item: ShoppingCartItem): void {
    this.updateQuantity(item, item.quantity - 1);
  }

  updateQuantity(item: ShoppingCartItem, quantity: number): void {
    quantity = Math.min(this.maxQuantity, Math.max(this.minQuantity, quantity));
    this.store.dispatch(new UpdateQuantity({ item, quantity }));
  }
}
