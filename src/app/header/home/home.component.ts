import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone : true,
  imports: [HeroComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styles : [``]
})
export class HomeComponent {

}
