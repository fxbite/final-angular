import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faCartPlus, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  foods: Food[] = [];
  starIcon = faStar;
  cartIcon = faCartPlus;
  timeIcon = faStopwatch;

  constructor(private fs: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) this.foods = this.fs.searchFood(params['searchTerm']);
      else if (params['tag']) this.foods = this.fs.filterFoodByTag(params['tag']);
      else this.foods = fs.getSampleFood();
    });
  }
}
