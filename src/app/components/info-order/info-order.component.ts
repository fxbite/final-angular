import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { ToastService } from '../../services/toast.service';
import { IFoodOrder } from '../../shared/interfaces/IFoodOrder';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { CartService } from '../../services/cart.service';
import { IFoodItem } from '../../shared/interfaces/IFoodCart';

@Component({
  selector: 'app-info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.scss']
})
export class InfoOrderComponent {
  private publicKey: string = 'pk_test_51N0ECVB9r4bjv1XwpbicompqX3X74fCWU5SdARDEP55ZFvxwuuxGVSu0timy3KFy2sczTPrygB2J7vQg0StIDJse00Lhf9L6EF';
  value: string = '';
  order!: IFoodOrder;
  orderTime = new Date();

  constructor(
    private router: Router,
    private ts: ToastService,
    private cartService: CartService,
    private orderService: OrderService,
    private http: HttpClient
  ) {
    // this.orderService.get().subscribe((order) => {
    //   this.order = order;
    // });
  }

  confirm() {
    this.http.post('http://localhost:4200/order/jgL3Wf5gCH', {
      // items: this.cart.item
    });
    this.router.navigate(['/home']);
  }

  checkout() {
    const foodItem: IFoodItem[] = this.cartService.getCurrentCart().items;
    this.orderService.payment(foodItem).subscribe(async (res: any) => {
      let stripe = await loadStripe(this.publicKey);
      stripe?.redirectToCheckout({
        sessionId: res.id
      });
    });
  }
}
