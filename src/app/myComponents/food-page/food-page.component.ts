import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatService } from 'src/app/services/cat.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/model/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Food;
  

  constructor(private route:ActivatedRoute, private fs:FoodService, private cartService:CatService, private router:Router) {
    route.params.subscribe((params)=>{
      if(params['id']){
        this.food = fs.getFoodById(params['id'])
      }
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
