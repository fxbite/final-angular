import { Component } from '@angular/core';
import {
  faStar,
  faClock,
  faXmark,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  starIcon = faStar;
  timeIcon = faClock;
  removeIcon = faXmark;
  increaseIcon = faPlus;
  descreaseIcon = faMinus;
  quantity: number = 1;
  price: number = 5;
}
