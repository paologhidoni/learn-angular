import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() currentRecipe!: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();

  onRecipeClicked() {
    this.recipeSelected.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
