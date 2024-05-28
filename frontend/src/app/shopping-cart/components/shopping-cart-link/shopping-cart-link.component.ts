import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShoppingCartState } from '../../shopping-cart.state';

@Component({
  selector: 'shopping-cart-link',
  templateUrl: './shopping-cart-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartLinkComponent {
  @Select(ShoppingCartState.getTotalQuantity)
  declare totalQuantity$: Observable<number>;
}
