import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  quantity: string = '0';
  constructor(cartServices: CartService) {
    cartServices.getCartObservable().subscribe((newCart) => {
      this.quantity = newCart.items?.length.toString()
    });
  }
}
