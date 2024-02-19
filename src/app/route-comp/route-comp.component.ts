import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-comp',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ButtonModule],
  template: `
    <h3>Routing and Navigation</h3>
    <div class="links flex">
      <a routerLink="/homepage" routerLinkActive="active">Home</a>
      <a routerLink="/product-list" routerLinkActive="active">Products</a>
      <a routerLink="/signup" routerLinkActive="active">Signup</a>
      
      <!-- <a href="/homepage">Home</a>
      <a href="/product-list">Products</a>
      <a href="/signup" >Signup</a> -->
    </div>
    <h3>Without router link</h3>
    <div class="flex gap-2">
      <p-button icon="pi pi-home" [rounded]="true" (onClick)="redirectTo('/homepage')" label="Home"></p-button>
      <p-button icon="pi pi-home" [rounded]="true" (onClick)="redirectTo('/product-list')" label="Products"></p-button>
      <p-button icon="pi pi-home" [rounded]="true" (onClick)="redirectTo('/signup')" label="Signup"></p-button>
    </div>
  `,
  styles: ` 
    a{
      color : #000;
      text-decoration : none;
      padding : 10px 15px;
      border : solid 1px #000;
      border-radius : 8px;
      background-color : #fff;
    }
    .links{
      gap : 10px;
      justify-content : left;
      padding : 30px;
    }
    a.active{
      color : blue;
    }
  `,
})
export class RouteCompComponent {

  constructor(private router: Router){}

  redirectTo(route : string) {
    this.router.navigate([route]);
  }
}
