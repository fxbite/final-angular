import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faHandshake,
  faHouseFlag,
  faTruckFast,
  faCalendarCheck,
  faClipboardCheck,
  faTicket
} from '@fortawesome/free-solid-svg-icons';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faSimple = faHandshake;
  faDeliver = faTruckFast;
  faHome = faHouseFlag;
  faFullTime = faCalendarCheck;
  faQuality = faClipboardCheck;
  faSaleOff = faTicket;
  foods: Food[] = [];

  constructor(private fs: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      this.foods = fs.getSampleFood();
    });
  }
}
