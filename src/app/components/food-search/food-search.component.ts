import { Component, ViewChild, Output, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { IFood } from '../../shared/interfaces/IFood';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss']
})
export class FoodSearchComponent {
  searchTerm!: string;
  tags?: IFood[];
  value2!: string;

  @ViewChild('searchFood', { static: false }) searchFood!: ElementRef;

  // @Output

  constructor(private ac: ActivatedRoute, private router: Router, private foodService: FoodService) {
    this.ac.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });

    this.foodService.getAllTags().subscribe((data) => {
      this.tags = data;
    });
  }

  // search(event: any) {
  //   let term = event.target.getAttribute('value');
  search(term: string): void {
    if (term) this.router.navigateByUrl('/menu?search=' + term);
    const inputValue = this.searchFood.nativeElement.value;
    console.log('Input value:', inputValue);
  }
}
