import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShoppingCartState } from '../../shopping-cart.state';
import { ShoppingCartItem } from '../../models/shopping-cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent {
  @Select(ShoppingCartState.getItems)
  declare items$: Observable<ShoppingCartItem[]>;

  @Select(ShoppingCartState.getTotalPrice)
  declare totalPrice$: Observable<number>;

  @Select(ShoppingCartState.getTotalQuantity)
  declare totalQuantity$: Observable<number>;
}
