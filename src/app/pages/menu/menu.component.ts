import { Component, OnInit } from '@angular/core';
import { faStar, faCartPlus, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from '../../services/food.service';
import { IFood } from '../../shared/interfaces/IFood';
import { ActivatedRoute } from '@angular/router';

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
  food!: IFood[];

  constructor(private fs: FoodService, ac: ActivatedRoute) {
      ac.params.subscribe((params) => {
        // if (params['searchTerm']) this.foods = this.fs.searchFood(params['searchTerm']);
        // else if (params['tag']) this.foods = this.fs.filterFoodByTag(params['tag']);
        // else this.foods = fs.getSampleFood();
      });
  }

  ngOnInit() {
    this.showFoods();
  }

  private showFoods() {
    this.fs.getFoods().subscribe((value) => {
      this.food = value;
    });
  }
}
