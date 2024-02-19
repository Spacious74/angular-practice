import { Routes } from '@angular/router';
import { RouteCompComponent } from './route-comp/route-comp.component';
import { ProductComponent } from './user-auth/product/product.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './user-auth/product-detail/product-detail.component';
import { MoreDetailsComponent } from './user-auth/more-details/more-details.component';
import { HomepageComponent } from './user-auth/homepage/homepage.component';

export const routes: Routes = [
  { path: 'product-list', component: ProductComponent },
  {
    path: 'product-list/:id',
    component: ProductDetailComponent,
    children: [{ path: 'more-details', component: MoreDetailsComponent }],
  },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent }, // wildcard route
];
