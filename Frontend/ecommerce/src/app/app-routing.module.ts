import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AdminComponent } from './Components/admin/admin.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MyCartComponent } from './Components/my-cart/my-cart.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProductByCategoryComponent } from './Components/product-by-category/product-by-category.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:"products/:category", component: ProductByCategoryComponent },
  {path: "my-orders", component: MyOrdersComponent},
  {path: "my-cart", component: MyCartComponent},
  {path: "authenticate/login", component: LoginComponent},
  {path: "authenticate/signup", component: SignupComponent},
  {path: "admin-dashboard", component: AdminComponent},
  {path: "product/add", component: AddProductComponent},
  {path: "product/edit/:productName", component: EditProductComponent},
  {path: "pay", component: PaymentComponent},
  { path: "**", redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
