import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
        path: 'menu',
        component: MenuComponent,
        title: 'Basic Form'
    }
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
