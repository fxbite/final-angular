import { Food } from './Food';

export class CartItem {
  constructor(public food: Food) {}
  itemQty: number = 1; // default =1
  totalItemPrice: number = this.food.price;
}
