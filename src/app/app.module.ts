import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { HomeComponent } from './myComponents/home/home.component';
import {RatingModule} from 'ng-starrating';
import { SearchComponent } from './myComponents/search/search.component'
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './myComponents/tags/tags.component';
import { CartPageComponent } from './myComponents/cart-page/cart-page.component';
import { FoodPageComponent } from './myComponents/food-page/food-page.component';
import { NotfoundComponent } from './myComponents/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodPageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
