import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Cart } from 'src/app/shared/cart';
import { CartItem } from 'src/app/shared/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;

  constructor(private cartService:CatService) {
    
     this.setCart();
   }

  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }

}
