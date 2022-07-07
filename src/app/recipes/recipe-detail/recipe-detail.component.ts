import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addIngredients(recipeIngredients: Ingredient[]) {
    // console.log("RECIPE INGREDIENTS", recipeIngredients);
    // console.log("EXISTING INGREDIENTS", existingIngredients);
      this.shoppingListService.updateIngredients(recipeIngredients);
  }
}
