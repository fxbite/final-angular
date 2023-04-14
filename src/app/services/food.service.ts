import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodSearchService {
  constructor() {}
  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) =>
          food.tags?.includes(tag)
        );
  }

  getFoodById(foodId: string): Food {
    return (
      this.getAll().find(
        (food) => food.id == foodId
      ) ?? new Food()
    );
  }
}
