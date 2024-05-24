import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ShoppingCartItem } from './models/shopping-cart-item';
import { AddToCart, RemoveFromCart } from './shopping-cart.actions';

export interface ShoppingCartStateModel {
  items: ShoppingCartItem[];
}

@State<ShoppingCartStateModel>({
  name: 'shoppingCart',
  defaults: {
    items: [],
  },
})
@Injectable()
export class ShoppingCartState {
  @Selector()
  static getItems(state: ShoppingCartStateModel) {
    return state.items;
  }

  @Selector()
  static getTotalQuantity(state: ShoppingCartStateModel) {
    return state.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  @Selector()
  static getTotalPrice(state: ShoppingCartStateModel) {
    return state.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0,
    );
  }

  @Action(AddToCart)
  addToCart(
    { getState, patchState }: StateContext<ShoppingCartStateModel>,
    { payload }: AddToCart,
  ) {
    const state = getState();
    const item = state.items.find((i) => i.product.id === payload.id);

    if (item) {
      patchState({
        items: state.items.map((i) =>
          i.product.id === payload.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      });
      return;
    }

    patchState({
      items: [...state.items, { product: payload, quantity: 1 }],
    });
  }

  @Action(RemoveFromCart)
  removeFromCart(
    { getState, patchState }: StateContext<ShoppingCartStateModel>,
    { payload }: RemoveFromCart,
  ) {
    const state = getState();
    const items = state.items.filter((i) => i.product.id !== payload.id);
    patchState({ items });
  }
}
