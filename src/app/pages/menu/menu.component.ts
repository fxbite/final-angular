import { Component, OnInit } from '@angular/core';
import { faStar, faCartPlus, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from 'src/app/services/food.service';
import { IFood } from 'src/app/shared/interfaces/IFood';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  value!: string;
  value2!: string;
  starIcon = faStar;
  cartIcon = faCartPlus;
  timeIcon = faStopwatch;
  foodsResult!: IFood[];

  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.showFoods();
  }

  private showFoods() {
    this.foodService.getFoods().subscribe((value) => {
      this.foodsResult = value;
    });
  }
}
