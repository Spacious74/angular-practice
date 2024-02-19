import { Component } from '@angular/core';
import {
  LowerCasePipe,
  UpperCasePipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  PercentPipe,
  TitleCasePipe,
} from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    TitleCasePipe,
  ],
  template: `
    <h2>Text formatter pipe</h2>
    <p>{{ name | lowercase }}</p>
    <p>{{ name | uppercase }}</p>
    <p>{{ sentence | titlecase }}</p>
    <h2>Currency formatter pipe</h2>
    <p>{{ price | currency : 'INR' }}</p>
    <h2>Number formatter pipe</h2>
    <p>{{ num | number : '1.2-3' }}</p>
    <p>{{ num | number : '3.2-5' }}</p>
    <h2>Date formatter pipe</h2>
    <p>{{ date | date : 'EEEE, dd-MMMM-YYYY' }}</p>
  `,
  styles: [
    `
      * {
        font-size: 1.3rem;
        padding: 10px;
      }
    `,
  ],
})
export class PipesComponent {
  public name: string = 'Vishal';
  public sentence: string = 'Hello here is vishal!';
  public price: number = 234;
  public num: number = 543.1234;
  public date = new Date();
  public obj = {
    name: 'Vishal',
    age: 23,
  };
}
