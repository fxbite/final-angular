import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodDetailComponent } from './components/pages/food-detail/food-detail.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'food-detail', component: FoodDetailComponent },
];
// , canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
