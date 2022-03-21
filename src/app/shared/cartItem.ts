import { Food } from "./model/food";

export class CartItem{

    constructor(food:Food){
        this.food=food;

        // this.price; //javaScript code, we can write this method 
    }
    food:Food;
    quantity:number=1;
    get price():number{
       return this.food.price *this.quantity;
    }

}