import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A recipe to make a fantastic Aperol Spritz',
      'Aperol Spritz',
      'https://recipesavant.blob.core.windows.net/food/Classic-Aperol-Spritz-1-f82161_facebook.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
