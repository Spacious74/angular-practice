import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    InputTextModule,
    PasswordModule,
    RadioButtonModule,
    ButtonModule,
    CalendarModule,
    JsonPipe,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  public username: string = '';
  public email: string = 'vishal@gmail.com';
  public password: string = '';
  public user_role: string = 'user';
  showData(userForm: any) {
    console.log(userForm.value);
  }
  // onSubmit(userForm: any) {
  //   console.log(userForm.value);
  // }
}
