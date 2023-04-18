import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginPageComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodDetailComponent } from './pages/food-detail/food-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Login | Fsoft Food'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register | Fsoft Food'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home | Fsoft Food',
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart | Fsoft Food'
  }
  // addition:
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
