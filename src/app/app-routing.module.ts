import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginPageComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodDetailComponent } from './pages/food-detail/food-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { MenuComponent } from './pages/menu/menu.component';
// , canActivate: [AuthGuard]
const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Login'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'User Profile'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'food-detail/:id',
    component: FoodDetailComponent,
    title: 'Food Detail'
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Basic Form',
    children: []
  },
  { path: 'menu?search=:searchTerm', component: MenuComponent },
  { path: 'menu?tag_filter/:tag', component: MenuComponent },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart'
  },
  {
    path: 'order/:slug',
    component: OrderComponent,
    title: 'Order'
  }
  // addition:
  // orderConfirm
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
