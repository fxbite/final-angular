import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private fs: FoodService) {}

  // search(event: any) {
  //   let term = event.target.value;
  search(term: string): void {
    if (term) this.router.navigateByUrl('/menu?search=' + term);
  }

  private showTags() {
    this.fs.getAllTags().subscribe((value) => {
      this.tags = value;
    });
  }
  // private filterByTag() {
  //   this.fs.getFoodsByTag().subscribe((value) => {
  //     this.tags = value;
  //   });
  // }
  ngOnInit() {
    this.showTags();
  }
}
