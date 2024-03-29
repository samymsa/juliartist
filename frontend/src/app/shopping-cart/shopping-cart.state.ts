import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from '../models/product';
import { AddToCart, RemoveFromCart } from './shopping-cart.actions';

export interface ShoppingCartStateModel {
  products: Product[];
}

@State<ShoppingCartStateModel>({
  name: 'shoppingCart',
  defaults: {
    products: [],
  },
})
@Injectable()
export class ShoppingCartState {
  @Selector()
  static getProducts(state: ShoppingCartStateModel) {
    return state.products;
  }

  @Selector()
  static getProductCount(state: ShoppingCartStateModel) {
    return state.products.length;
  }

  @Selector()
  static getTotalPrice(state: ShoppingCartStateModel) {
    return state.products.reduce((acc, product) => acc + product.price, 0);
  }

  @Action(AddToCart)
  addToCart(
    { getState, patchState }: StateContext<ShoppingCartStateModel>,
    { payload }: AddToCart,
  ) {
    const state = getState();
    patchState({
      products: [...state.products, payload],
    });
  }

  @Action(RemoveFromCart)
  removeFromCart(
    { getState, patchState }: StateContext<ShoppingCartStateModel>,
    { payload }: RemoveFromCart,
  ) {
    const state = getState();
    patchState({
      products: state.products.filter((product) => product !== payload),
    });
  }
}
