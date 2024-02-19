import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: ` 
    <p>Child data - {{childData}}</p>
    <p>
      Received Parent data - {{receivedData}}
    </p>
    <button (click)="fireEvent()" >Send data to parent</button>
  `,
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() public receivedData : any
  // or if you want to change the name of parent data then you can write like that - 
  // @Input("receivedData") public  name : any

  public childData : string = "Hello this is child data";
  @Output() public childEvent = new EventEmitter();
  fireEvent(){
    this.childEvent.emit(this.childData);
  }

}
