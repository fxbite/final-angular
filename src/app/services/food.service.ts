import { Injectable } from '@angular/core';
import {
  Food,
  FoodTag
} from '../shared/models/Food';
import {
  sample_foods,
  sample_tags
} from 'src/assets/data/FoodSample';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() {}
  getSampleFood(): Food[] {
    return sample_foods;
  }

  searchFood(searchTerm: string) {
    return this.getSampleFood().filter((food) =>
      food.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }

  getSampleTag(): FoodTag[] {
    return sample_tags;
  }

  filterFoodByTag(tag: string): Food[] {
    return tag === 'All'
      ? this.getSampleFood()
      : this.getSampleFood().filter((food) =>
          food.tags?.includes(tag)
        );
  }

  getFoodById(foodId: string): Food {
    return (
      this.getSampleFood().find(
        (food) => food.id == foodId
      ) ?? new Food()
    );
  }
}
