import { Component } from '@angular/core';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HttpClientModule } from '@angular/common/http';
import { RouteCompComponent } from './route-comp/route-comp.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PrimeNGConfig } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { MyreactiveFormComponent } from './myreactive-form/myreactive-form.component';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './user-auth/homepage/homepage.component';


import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserAuthModule,
    RouteCompComponent,
    UserFormComponent,
    FormsModule,
    MyreactiveFormComponent,
    CommonModule,
    HomepageComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule],
})
export class AppComponent {
  title = 'angular-tutorial';
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
