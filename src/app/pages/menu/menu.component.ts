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
      if (params['searchTerm']) {
        this.fs.searchFoods(params['searchTerm']).subscribe((data) => {
          this.food = data;
        });
      }
      if (params['tag']) {
        this.fs.getFoodsByTag(params['tag']).subscribe((data) => {
          this.food = data;
        });
      }
      if (params['tag'] === 'All') {
        this.fs.getFoods().subscribe((data) => {
          this.food = data;
        });
      }
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
