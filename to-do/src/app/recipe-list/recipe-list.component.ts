import { Component, Input } from '@angular/core';
import { Recipe } from './../models/Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Input() childRecipeList: Recipe[];

  ratingColor(currentRecipe){
    if (currentRecipe.rating === 3){
      return "bg-danger";
    } else if (currentRecipe.rating === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }




  constructor() { }

  ngOnInit() {
  }

}
