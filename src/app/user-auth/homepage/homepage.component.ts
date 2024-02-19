import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './homepage.component.html',
  styles: `
  *{
    margin : 0;
    padding : 0;
  }
  a{
    text-decoration : none;
    color : #fff;
  }
  `,
})
export class HomepageComponent {}
