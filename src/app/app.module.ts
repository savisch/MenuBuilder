import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayMenuComponent } from './display-menu/display-menu.component';
import { DiplayMealsComponent } from './display-meals/display-meals.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { MealsService } from './service/meals.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayMenuComponent,
    DiplayMealsComponent,
    AddMealComponent,
    EditMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MealsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
