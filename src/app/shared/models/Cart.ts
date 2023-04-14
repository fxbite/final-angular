import { CartItem } from './CartItem';

export class Cart {
  items: CartItem[] = [];
  totalQty: number = 0;
  totalPrice: number = 0;
}
