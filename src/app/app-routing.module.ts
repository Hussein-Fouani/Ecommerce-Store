import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AuthGuard } from './_auth/auth.guard';
import { ShowproductsDetailsComponent } from './showproducts-details/showproducts-details.component';
import { ProductResolverService } from './product-resolver.service';
import { ProductviewComponent } from './productview/productview.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN'] },
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { role: ['USER'] },
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'addnewproduct',
    component: AddNewProductComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN'] },
    resolve: {
      product: ProductResolverService,
    },
  },
  {
    path: 'showproductdetails',
    component: ShowproductsDetailsComponent,
    canActivate: [AuthGuard],
    data: { role: ['ADMIN'] },
    resolve: {
      product: ProductResolverService,
    },
  },
  {
    path: 'productviewComponent',
    component: ProductviewComponent,
    resolve: {
      product: ProductResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
