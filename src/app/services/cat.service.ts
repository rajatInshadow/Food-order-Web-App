import { Injectable } from '@angular/core';
import { Cart } from '../shared/cart';
import { CartItem } from '../shared/cartItem';
import { Food } from '../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private cart:Cart = new Cart();

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id===food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity+1)
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:number):void{
    this.cart.items= this.cart.items.filter(item => item.food.id != foodId)
  }
  changeQuantity(quantity:number, foodId:number){
    let cartItem = this.cart.items.find(item => item.food.id ===foodId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
  }

  getCart():Cart{
    return this.cart;
  }
  constructor() { }
}
