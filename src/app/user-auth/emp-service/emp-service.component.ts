import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h4>Employees list</h4>
    <div *ngFor="let emp of employees" class="emp">
      <div class="username">{{ emp.name }}</div>
    </div>
  `,
  styleUrl: './emp-service.component.css',
})
export class EmpServiceComponent {
  public employees : any[] = [];
  
  constructor(){}

  ngOnInit(){
    // this.employees = this._employeeService.getEmployees();
  }

}
