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
import { OrderConfirmComponent } from './pages/order-confirm/order-confirm.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
    title: 'Cart | Fsoft Food'
  },
  {
    path: 'order/:slug',
    component: OrderComponent,
    title: 'Order | Fsoft Food'
  },
  { path: 'order-confirm', component: OrderConfirmComponent, title: 'Order Confirm | Fsoft Food' },
  { path: '**', component: NotFoundComponent, title: 'E404 | Fsoft Food' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
