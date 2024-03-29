import { Product } from "../../models/product";

export type ShoppingCartItem = {
  product: Product;
  quantity: number;
};