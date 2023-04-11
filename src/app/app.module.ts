import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartComponent } from './pages/cart/cart.component';

import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const PRIMENG_DEPENDENCIES = [ImageModule, InputNumberModule, InputTextModule];

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule, ...PRIMENG_DEPENDENCIES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
