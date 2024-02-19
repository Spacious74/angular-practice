import { Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { NgSwitch } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SubscribeService } from '../Services/subscribe.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports : [CommonModule, HomeComponent,AdminComponent, NgSwitch, ButtonModule ],
  templateUrl: './header.component.html',
  styles : [`    `],
  providers : [SubscribeService]
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }
  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }
  
// second way to inject a service
  // public service = inject(SubscribeService)

  constructor(private service : SubscribeService) {}

  subscribe(){

    // first basic way to inject a service
    // let subService = new SubscribeService()
    // subService.onSubscribe();

    // second way to use after injection of a service 
    this.service.onSubscribe();

  }
}
