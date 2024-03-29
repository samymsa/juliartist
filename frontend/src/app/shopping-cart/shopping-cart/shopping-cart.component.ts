import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ShoppingCartState } from '../shopping-cart.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent {
  @Select(ShoppingCartState.getProducts)
  declare products$: Observable<Product[]>;

  @Select(ShoppingCartState.getTotalPrice)
  declare totalPrice$: Observable<number>;
}
