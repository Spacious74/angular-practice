import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmpServiceComponent } from './emp-service/emp-service.component';
import { EmpServiceFileService } from './emp-service-file.service';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule  } from '@angular/forms';
import { ProductCardContainerComponent } from './product-card-container/product-card-container.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignupComponent,
    ParentComponent,
    PipesComponent,
    EmpServiceComponent,
    ProductComponent,
    HttpClientModule,
    ProductDetailComponent,
    RouterOutlet,
    FormsModule,
    ProductCardContainerComponent,
    SearchComponent
  ],
  exports: [
    SignupComponent,
    ParentComponent,
    PipesComponent,
    EmpServiceComponent,
    ProductComponent,
    HttpClientModule,
    ProductDetailComponent,
    RouterOutlet,
    FormsModule,
    ProductCardContainerComponent,
    SearchComponent
  ],
  providers: [EmpServiceFileService, HttpClientModule],
})
export class UserAuthModule {}
