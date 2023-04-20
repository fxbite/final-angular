import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faPencil, faWrench } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  faEdit = faPencil;
  faRef = faWrench;

  constructor(private cs: CartService, private router: Router) {
    // this.cs.getCartObservable().subscribe((cart) => {
    //   this.cart = cart;
    // });
  }
}
