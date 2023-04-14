import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { FoodTag } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss']
})
export class FoodSearchComponent {
  searchTerm!: string;
  tags?: FoodTag[];
  value2!: string;

  constructor(ac: ActivatedRoute, private router: Router, fs: FoodService) {
    ac.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
    this.tags = fs.getSampleTag();
  }

  search(event: any) {
    let term = event.target.value;
    if (term) this.router.navigateByUrl('/menu?search=' + term);
  }
  ngOnInit() {}
}
