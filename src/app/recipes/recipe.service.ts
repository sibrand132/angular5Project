import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [ new Recipe('Recipe',
                                          'test desc',
                                          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
                                           [ new Ingredient('Meat', 1),
                                             new Ingredient('French Fries', 20) ]
                                           )];

  recipeSelected = new EventEmitter<Recipe>();


  getRecipes(){
    return this.recipes.slice();
  }



}
