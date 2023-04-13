import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CartComponent } from './pages/cart/cart.component';
import { DishComponent } from './components/dish/dish.component';

import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const PRIMENG_DEPENDENCIES = [
    InputTextModule,
    ChipModule,
    CardModule,
    ButtonModule,
    RatingModule,
]


@NgModule({
    declarations: [AppComponent, LoginComponent, RegisterComponent, MenuComponent, CartComponent, DishComponent],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        FormsModule, 
        ...PRIMENG_DEPENDENCIES, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
