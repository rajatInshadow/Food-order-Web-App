import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAllFoodByTag(tag: string): Food[] {
    if (tag == 'All') {
      return this.getAll();
    } else {
      return this.getAll().filter((food) => food.tags?.includes(tag));
    }
  }

  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id== id)!;
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 12 },
      { name: 'fastFood', count: 5 },
      { name: 'Food', count: 6 },
      {name:'extras', count:1}
    ];
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'burger',
        cookTime: '10-15',
        price: 20,
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '../../../assets/img/burger.jpg',
        tags: ['fastFood'],
      },
      {
        id: 2,
        name: 'egg',
        cookTime: '5-10',
        price: 5,
        favorite: false,
        origins: ['italy'],
        star: 3.3,
        imageUrl: '../../../assets/img/egg.jpg',
        tags: ['fastFood'],
      },
      {
        id: 3,
        name: 'fish',
        cookTime: '20-30',
        price: 30,
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '../../../assets/img/fish.jpg',
        tags: ['Food'],
      },
      {
        id: 4,
        name: 'meatball',
        cookTime: '30-45',
        price: 35,
        favorite: false,
        origins: ['middle east china', 'persia'],
        star: 4.5,
        imageUrl: '../../../assets/img/meatball.jpg',
        tags: ['Food'],
      },
      {
        id: 5,
        name: 'salad',
        cookTime: '5-10',
        price: 2,
        favorite: false,
        origins: ['italy'],
        star: 3.3,
        imageUrl: '../../../assets/img/salad.jpg',
        tags: ['extras'],
      },
      {
        id: 6,
        name: 'sandwhich',
        cookTime: '10-15',
        price: 20,
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '../../../assets/img/sandwhich.jpg',
        tags: ['fastFood'],
      },
      {
        id: 7,
        name: 'butter paneer',
        cookTime: '10-15',
        price: 30,
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '../../../assets/img/butter paneer.jpg',
        tags: ['Food'],
      },
      {
        id: 8,
        name: 'chicken',
        cookTime: '10-15',
        price: 35,
        favorite: true,
        origins: ['italy'],
        star: 5.0,
        imageUrl: '../../../assets/img/chicken.jpg',
        tags: ['Food'],
      },
      {
        id: 9,
        name: 'palak paneer',
        cookTime: '10-15',
        price: 25,
        favorite: false,
        origins: ['italy'],
        star: 4.3,
        imageUrl: '../../../assets/img/palak paneer.jpg',
        tags: ['Food'],
      },
      {
        id: 10,
        name: 'pasta',
        cookTime: '10-15',
        price: 20,
        favorite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '../../../assets/img/pasta.jpg',
        tags: ['fastFood'],
      },
      {
        id: 11,
        name: 'pizza',
        cookTime: '10-15',
        price: 30,
        favorite: false,
        origins: ['italy'],
        star: 5.0,
        imageUrl: '../../../assets/img/pizza.jpg',
        tags: ['fastFood'],
      },
      {
        id: 12,
        name: 'biryani',
        cookTime: '10-15',
        price: 35,
        favorite: false,
        origins: ['italy'],
        star: 5.0,
        imageUrl: '../../../assets/img/biryani.jpg',
        tags: ['Food'],
      },
    ];
  }
}
