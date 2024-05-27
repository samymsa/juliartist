import { Product } from '../products/models/product';
import { ShoppingCartItem } from './models/shopping-cart-item';

export class AddToCart {
  static readonly type = '[ShoppingCart] AddToCart';

  constructor(public payload: Product) {}
}

export class RemoveFromCart {
  static readonly type = '[ShoppingCart] RemoveFromCart';

  constructor(public payload: Product) {}
}

export class ClearCart {
  static readonly type = '[ShoppingCart] ClearCart';
}

export class UpdateQuantity {
  static readonly type = '[ShoppingCart] UpdateQuantity';

  constructor(public payload: { item: ShoppingCartItem; quantity: number }) {}
}
