import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
