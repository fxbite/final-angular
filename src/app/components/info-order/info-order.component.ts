import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.scss']
})
export class InfoOrderComponent {
  value!: string;

  constructor(
    private router: Router,
    private ts: ToastService
  ) {}

  confirm() {
    this.router.navigate(['/home']);
  }
}
