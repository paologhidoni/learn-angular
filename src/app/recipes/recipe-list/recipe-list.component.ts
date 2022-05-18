import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Aperol Spritz',
      'A recipe to make a fantastic Aperol Spritz',
      'https://recipesavant.blob.core.windows.net/food/Classic-Aperol-Spritz-1-f82161_facebook.jpg'
    ),
    new Recipe(
      'Moscow Mule',
      'Little bit of this, little bit of that',
      'https://cdn0.wideopeneats.com/wp-content/uploads/2018/04/moscow-mule-h2.jpg'
    ),
  ];

  @Output() recipeToDisplay = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);

    this.recipeToDisplay.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
