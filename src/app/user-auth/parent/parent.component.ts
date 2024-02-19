import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: ` 
  <div class="parent">
    <p>This is the Parent component</p>
    <p>Parent data - {{parentData}}</p>
    <p>Child data - {{message}}</p>
    <br>
    <div class="child">
      <app-child (childEvent)="message=$event" [receivedData] = "parentData" ></app-child> 
    </div>
  </div>

  `,
  styles: `
    .parent{
      width : 500px;
      padding : 20px;
      border : solid 1px #000;
      background-color : #FFFFFF;
    }
    .child{
      padding : 20px;
      border : solid 1px #000;
      background-color : skyblue;
    }
  `,
})
export class ParentComponent {
  public parentData : string = "Hello this is parent data"
  public message : string = ""
}
