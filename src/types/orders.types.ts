import { TProduct } from "./product.types";

export type TOrdersItem = {
  id: number;
  items: TProduct[];
  subtotal: number;
};
