import { Component } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent {
  value1: number = 10;
  valueS!: number;
  favourite: boolean = false;

  faAddCart = faCartPlus;
  btnCart = 'Add to Cart';
  btnQty = 'Quantity';

  images: any[] = [
    {
      previewImageSrc: '/assets/img/food-4.jpg',
      thumbnailImageSrc: '/assets/img/food-4.jpg',
      title: 'Title 1'
    },
    {
      previewImageSrc: '/assets/img/food-5.jpg',
      thumbnailImageSrc: '/assets/img/food-5.jpg',
      title: 'Title 2'
    },
    {
      previewImageSrc: '/assets/img/food-6.jpg',
      thumbnailImageSrc: '/assets/img/food-6.jpg',
      title: 'Title 3'
    },
    {
      previewImageSrc: '/assets/img/food-1.jpg',
      thumbnailImageSrc: '/assets/img/food-1.jpg',
      title: 'Title 4'
    }
  ];
}
