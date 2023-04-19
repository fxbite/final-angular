import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faClock, faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  starIcon = faStar;
  timeIcon = faClock;
  removeIcon = faXmark;
  increaseIcon = faPlus;
  descreaseIcon = faMinus;

  quantity: number = 1;
  price: number = 5;
  cart!: Cart;
  orderId: string = 'jgL3Wf5gCH';

  constructor(private cs: CartService, private router: Router) {
    this.cs.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {}

  deleteItem(cartItem: CartItem) {
    this.cs.deleteCartItem(cartItem.food.id);
  }

  checkQuantity(cartItem: CartItem, qty: number) {
    this.cs.changeQuantity(cartItem.food.id, qty);
  }
  submitOrder() {
    this.router.navigate(['/order', this.orderId]);
  }
}
