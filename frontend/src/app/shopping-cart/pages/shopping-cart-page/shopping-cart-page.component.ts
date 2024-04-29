import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from '../../models/shopping-cart-item';
import { ShoppingCartState } from '../../shopping-cart.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart-page.component.html',
})
export class ShoppingCartPageComponent {
  @Select(ShoppingCartState.getItems)
  declare items$: Observable<ShoppingCartItem[]>;

  @Select(ShoppingCartState.getTotalPrice)
  declare totalPrice$: Observable<number>;

  @Select(ShoppingCartState.getTotalQuantity)
  declare totalQuantity$: Observable<number>;
}
