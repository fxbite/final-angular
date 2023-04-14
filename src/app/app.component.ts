import { Component, OnInit } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private ts: ToastService) {}

  ngOnInit(): void {
    this.ts.subject$.subscribe((res) => {
      if (res === 'login') {
        this.ts.showLogin();
      } else if (res === 'register') {
        this.ts.showRegister();
      } else if (res === 'itemToCart') {
        this.ts.showAddToCart();
      } else if (res === 'order') {
        this.ts.showOrder();
      }
    });
  }
  // avoid if else by declaring func getStatusMess(key: string) {
  // 
  // }
}
