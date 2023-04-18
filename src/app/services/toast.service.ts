import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  subject$ = new Subject();

  constructor(private ms: MessageService) {}

  showLogin() {
    this.ms.add({
      key: 'login',
      severity: 'success',
      summary: 'Login Successful',
      life: 2000
    });
  }
  showRegister() {
    this.ms.add({
      key: 'register',
      severity: 'success',
      summary: 'Register Successful',
      life: 3000
    });
  }

  showAddToCart() {
    this.ms.add({
      key: 'itemToCart',
      severity: 'info',
      summary: 'Item to Cart',
      detail: `@food added to cart!`,
      life: 2000
    });
  }

  showOrder() {
    this.ms.add({
      key: 'order',
      severity: 'info',
      summary: 'Order Confirmed',
      detail: `@order has been submitted!`,
      life: 2000
    });
  }
}
