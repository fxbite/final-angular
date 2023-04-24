import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { ToastService } from '../../services/toast.service';
import { IFoodOrder } from '../../shared/interfaces/IFoodOrder';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.scss']
})
export class InfoOrderComponent {
  value: string = '';
  order!: IFoodOrder;
  orderTime = new Date();

  constructor(private router: Router, private ts: ToastService, private orderService: OrderService, private http: HttpClient) {
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
}
