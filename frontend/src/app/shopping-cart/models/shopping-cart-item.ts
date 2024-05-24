import { Product } from '../../products/models/product';

export type ShoppingCartItem = {
  product: Product;
  quantity: number;
};
