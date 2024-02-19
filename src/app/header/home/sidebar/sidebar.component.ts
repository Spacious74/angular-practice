import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SubscribeService } from '../../../Services/subscribe.service';
@Component({
  selector: 'app-sidebar',
  standalone : true,
  imports : [ButtonModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  public service = inject(SubscribeService)
  subscribe(){
    this.service.onSubscribe();
  }
}
