import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHandshake, faHouseFlag, faTruckFast, faCalendarCheck, faClipboardCheck, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from '../../services/food.service';
import { IFood } from '../../shared/interfaces/IFood';
import { Food } from '../../shared/models/Food';

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
  foods!: IFood[];

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.showFoods();
  }
  private showFoods() {
    this.fs.getFoods().subscribe((value) => {
      this.foods = value;
    });
  }
}
