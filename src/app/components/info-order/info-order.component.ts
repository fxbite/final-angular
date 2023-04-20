import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { ToastService } from '../../services/toast.service';
import { IFoodOrder } from 'src/app/shared/interfaces/IFoodOrder';

@Component({
  selector: 'app-info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.scss']
})
export class InfoOrderComponent {
  value: string = ''
  order!: IFoodOrder;
  orderTime = new Date();

  constructor(private router: Router, private ts: ToastService, private orderService: OrderService) {
    // this.orderService.get().subscribe((order) => {
    //   this.order = order;
    // });
  }

  confirm() {
    this.router.navigate(['/home']);
  }
}
