import { Component, OnInit } from '@angular/core';
import { faStar, faCartPlus, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from '../../services/food.service';
import { IFood } from '../../shared/interfaces/IFood';
import { LoadingService } from '../../services/loading.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  starIcon = faStar;
  cartIcon = faCartPlus;
  timeIcon = faStopwatch;
  defaultQuantity: number = 1
  foodsResult!: IFood[];
  loading$ = this.loadingService.loading$;
  skeletonResult: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute, private cartService: CartService, private loadingService: LoadingService) {
    // ac.params.subscribe((params) => {
    //   if (params['searchTerm']) {
    //     this.fs.searchFoods(params['searchTerm']).subscribe((data) => {
    //       this.food = data;
    //     });
    //   }
    //   if (params['tag']) {
    //     this.fs.getFoodsByTag(params['tag']).subscribe((data) => {
    //       this.food = data;
    //     });
    //   }
    //   if (params['tag'] === 'All') {
    //     this.fs.getFoods().subscribe((data) => {
    //       this.food = data;
    //     });
    //   }
    // });
  }

  ngOnInit() {
    this.showFoods();
  }

  private showFoods() {
    this.foodService.getFoods().subscribe((value) => {
      this.foodsResult = value;
    });
  }

  addFoodToCart(item: IFood) {
    this.cartService.addToCart({
      food: item,
      quantity: this.defaultQuantity,
      price: item.price * this.defaultQuantity
    })
  }
}
