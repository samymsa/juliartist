import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShoppingCartState } from '../../shopping-cart.state';

@Component({
  selector: 'app-shopping-cart-link',
  templateUrl: './shopping-cart-link.component.html',
})
export class ShoppingCartLinkComponent {
  @Select(ShoppingCartState.getProductCount)
  declare productCount$: Observable<number>;
}
