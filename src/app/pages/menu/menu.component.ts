<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { faStar, faCartPlus, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from 'src/app/services/food.service';
import { IFood } from 'src/app/shared/interfaces/IFood';
=======
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faCartPlus, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
>>>>>>> dev-shidoru

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
<<<<<<< HEAD
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
=======
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
>>>>>>> dev-shidoru
    });
  }
}
