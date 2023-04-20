import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';
import { CartService } from 'src/app/services/cart.service';
import { IFoodOrder } from '../../shared/interfaces/IFoodOrder';
import { Cart } from 'src/app/shared/models/Cart';
import { sample_order } from 'src/assets/data/FoodSample';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss']
})
export class OrderConfirmComponent {
  order!: IFoodOrder[];

  cols!: any[];

  constructor(private orderService: OrderService, private router: Router, ac: ActivatedRoute) {
    ac.params.subscribe((params) => {
      this.order = orderService.getSampleOrder();
    });
    // this.cs.getCartObservable().subscribe((cart) => {
    //   this.cart = cart;
    // });
  }

  ngOnInit() {
    this.cols = [
      { field: 'orderId', header: 'OrderId' },
      { field: 'user', header: 'UserName' },
      { field: 'totalPrice', header: 'Price' },
      { field: 'address', header: 'Location' },
      { field: 'status', header: 'Status' }
    ];
  }

  clear(table: Table) {
    table.clear();
  }
  getSeverity(status: string) {
    switch (status) {
      case 'Confirmed':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Rejected':
        return 'danger';
      default:
        return '';
    }
  }
}
