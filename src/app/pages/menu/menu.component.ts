import { Component } from '@angular/core';
import { faStar, faCartPlus, faStopwatch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  value!: string;
  value2!: string;
  starIcon = faStar;
  cartIcon = faCartPlus;
  timeIcon = faStopwatch;
}
