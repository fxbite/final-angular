import { Component, Output } from '@angular/core';
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

  // @Output 

  constructor(ac: ActivatedRoute, private router: Router, private fs: FoodService) {
    ac.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });

    this.fs.getAllTags().subscribe((data) => {
      this.tags = data;
    });
  }

  // search(event: any) {
  //   let term = event.target.getAttribute('value');
  search(term: string): void {
    if (term) this.router.navigateByUrl('/menu?search=' + term);
  }
}
