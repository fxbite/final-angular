import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { IFoodCart } from '../../shared/interfaces/IFoodCart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent {
  starIcon = faStar;
  timeIcon = faClock;
  cart!: IFoodCart

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }
  // deleteItem(cartItem: CartItem) {
  //   this.cs.deleteCartItem(cartItem.food.id);
  // }

  // loadCarsLazy(event: LazyLoadEvent) {
  //   setTimeout(() => {
  //     let loadedCars = this.cars.slice(event.first, event.first + event.rows);
  //     Array.prototype.splice.apply(this.virtualCars, [...[event.first, event.rows], ...loadedCars]);
  //     event.forceUpdate();
  //   }, Math.random() * 1000 + 250);
  // }
}
