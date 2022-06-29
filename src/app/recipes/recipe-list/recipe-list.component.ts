import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  @Output() recipeToDisplay = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);

    this.recipeToDisplay.emit(recipe);
  }

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
