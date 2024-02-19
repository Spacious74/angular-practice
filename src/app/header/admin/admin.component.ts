import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-admin',
  standalone : true,
  imports : [CommonModule,FormsModule, UserListComponent, UserDetailComponent],
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';
}
