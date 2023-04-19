import { Component, OnInit } from '@angular/core';
import { faStar, faCartPlus, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from '../../services/food.service';
import { IFood } from '../../shared/interfaces/IFood';
import { LoadingService } from '../../services/loading.service';

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
  loading$ = this.loadingService.loading$;
  skeletonResult: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private foodService: FoodService, private loadingService: LoadingService) {}

  ngOnInit() {
    this.showFoods();
  }

  private showFoods() {
    this.foodService.getFoods().subscribe((value) => {
      this.foodsResult = value;
    });
  }

  // addFoodToCart() {
  //   console.log('dasdsa')
  // }
}
