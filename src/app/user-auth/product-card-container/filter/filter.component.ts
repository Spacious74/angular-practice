import { Component, Input, Output } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [RadioButtonModule, FormsModule],
  template: `
    <div class="card flex justify-content-center">
      <div class="flex flex-wrap gap-3">
        <div class="flex align-items-center">
          <p-radioButton
            name="status"
            value="all"
            [(ngModel)]="selectedOption"
            inputId="ingredient1"
            (onClick)="selectionChanges()"
          ></p-radioButton>
          <label for="ingredient1" class="ml-2">All ({{ totalProd }})</label>
        </div>

        <div class="flex align-items-center">
          <p-radioButton
            name="status"
            value="true"
            [(ngModel)]="selectedOption"
            inputId="ingredient2"
            (onClick)="selectionChanges()"
          ></p-radioButton>
          <label for="ingredient2" class="ml-2">Sold ({{ solded }})</label>
        </div>

        <div class="flex align-items-center">
          <p-radioButton
            name="status"
            value="false"
            [(ngModel)]="selectedOption"
            inputId="ingredient3"
            (onClick)="selectionChanges()"
          ></p-radioButton>
          <label for="ingredient3" class="ml-2">Unsold ({{ unsold }})</label>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class FilterComponent {
  public selectedOption: string = 'all';

  @Input() public totalProd: number;
  @Input() public solded: number;
  @Input() public unsold: number;

  @Output() selectionEvent : EventEmitter<string> = new EventEmitter<string>();

  selectionChanges() {
    this.selectionEvent.emit(this.selectedOption);
  }
}
