import { Component, OnInit } from '@angular/core';
import { ToastService } from './services/toast.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private ts: ToastService, private ms: MessageService) {}

  ngOnInit() {
    this.ts.toastSubject.subscribe((message) => {
      this.ms.add(message);
    });
  }
}
