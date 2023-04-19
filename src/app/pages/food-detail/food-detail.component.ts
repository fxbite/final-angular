import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent {
  value1: number = 10;
  valueS!: number;
  favourite: boolean = false;
  food!: Food;

  faAddCart = faCartPlus;
  btnCart = 'Add to Cart';
  btnQty = 'Quantity';

  images: any[] = [
    {
      previewImageSrc: '/assets/food-4.jpg',
      thumbnailImageSrc: '/assets/food-4.jpg',
      title: 'Title 1'
    },
    {
      previewImageSrc: '/assets/food-5.jpg',
      thumbnailImageSrc: '/assets/food-5.jpg',
      title: 'Title 2'
    },
    {
      previewImageSrc: '/assets/food-6.jpg',
      thumbnailImageSrc: '/assets/food-6.jpg',
      title: 'Title 3'
    },
    {
      previewImageSrc: '/assets/food-1.jpg',
      thumbnailImageSrc: '/assets/food-1.jpg',
      title: 'Title 4'
    }
  ];

  constructor(ac: ActivatedRoute, foodService: FoodService, private cs: CartService, private router: Router) {
    ac.params.subscribe((params) => {
      // if (params['id']) this.food = foodService.getFoodById(params['id']);
    });
  }

  addToCart() {
    this.cs.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
}
