import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  //recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Test Recipe',
  //     'Test',
  //     'https://www.thermos.com.sg/assets/blog/images/3.png',
  //     [new Ingredient('Cock', 2), new Ingredient('Meat', 1)]
  //   ),
  //   new Recipe(
  //     'Test Recipe 2',
  //     'Test 2',
  //     'https://static.toiimg.com/thumb/msid-66473975,width-800,height-600,resizemode-75,imgsize-1763580,pt-32,y_pad-40/66473975.jpg',
  //     [new Ingredient('Burger', 2), new Ingredient('Cock', 3)]
  //   ),
  //   new Recipe(
  //     'Test Recipe 3',
  //     'Test 3',
  //     'https://www.tiongbahruplaza.com.sg/files/images/Blog_740x540%20(1).jpg',
  //     [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Test Recipe 4',
  //     'Test 4',
  //     'https://www.localguidesconnect.com/t5/image/serverpage/image-id/654842iB01C153260AF637A/image-size/large?v=v2&px=999',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
