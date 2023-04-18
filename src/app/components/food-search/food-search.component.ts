import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { IFoodTag } from '../../shared/interfaces/IFood';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss']
})
export class FoodSearchComponent {
  searchTerm!: string;
  tags?: IFoodTag[];
  value2!: string;

  constructor(private router: Router, fs: FoodService) {}

  // search(event: any) {
  //   let term = event.target.value;
  search(term: string): void {
    if (term) this.router.navigateByUrl('/menu?search=' + term);
  }
  ngOnInit() {}
}
