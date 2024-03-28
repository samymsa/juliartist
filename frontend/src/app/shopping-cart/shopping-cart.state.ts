import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product } from '../models/product';
import { AddToCart } from './shopping-cart.actions';

export interface ShoppingCartStateModel {
  items: Product[];
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
  static getItemsCount(state: ShoppingCartStateModel) {
    return state.items.length;
  }

  @Action(AddToCart)
  addToCart(
    { getState, patchState }: StateContext<ShoppingCartStateModel>,
    { payload }: AddToCart,
  ) {
    const state = getState();
    patchState({
      items: [...state.items, payload],
    });
  }
}
