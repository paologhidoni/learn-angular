import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
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
     
    getRecipes() {
        // this returns a copy of the recipes array, which is a private property and
        // can't be accessed from outside. This way the original array won't be modified.
        return this.recipes.slice();
    }
}