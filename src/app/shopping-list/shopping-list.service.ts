import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // every time I add an ingredient, I emit an event and pass as argument the newly updated
        // copy of the ingredients array. Inside shopping-list.component.ts I will subscribe to this event
        // and update the ingredients array with this new version.
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    updateIngredients(newIngredients: Ingredient[]) {
        console.log(newIngredients)

        // add logic to update amount of ingredient if it already exists, instead of adding it again
        
        this.ingredients.push(...newIngredients);
        this.ingredientsChanged.emit(this.ingredients.slice());


    }
}