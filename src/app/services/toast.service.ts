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
      detail: '',
      life: 2000
    });
  }
  showRegister() {
    this.ms.add({
      key: 'register',
      severity: 'success',
      summary: 'Register Successful',
      detail: '',
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
}
