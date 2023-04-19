import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  qty!: string;
  constructor(cs: CartService) {
    cs.getCartObservable().subscribe((newCart) => {
      this.qty = newCart.totalQty as unknown as string;
    });
  }
}
