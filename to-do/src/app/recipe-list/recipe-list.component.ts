import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {

  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(recipeToEdit: Recipe) {
    recipeToEdit.currentlyEditing = true;
    this.clickSender.emit(recipeToEdit);
  }

  ratingColor(currentRecipe){
    if (currentRecipe.rating === 3){
      return "bg-danger";
    } else if (currentRecipe.rating === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  filterByCompleteness: string = "incompleteRecipes";

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleDone(clickedRecipe: Recipe, setCompleteness: boolean) {
    clickedRecipe.haveTried = setCompleteness;
  }
}
