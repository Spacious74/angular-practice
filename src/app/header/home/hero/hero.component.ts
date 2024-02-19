import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SubscribeService } from '../../../Services/subscribe.service';
@Component({
  selector: 'app-hero',
  standalone : true,
  imports : [ButtonModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  public service = inject(SubscribeService)
  subscribe(){
    this.service.onSubscribe();
  }
}
