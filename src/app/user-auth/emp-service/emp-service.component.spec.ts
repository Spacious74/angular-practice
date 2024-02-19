import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpServiceComponent } from './emp-service.component';

describe('EmpServiceComponent', () => {
  let component: EmpServiceComponent;
  let fixture: ComponentFixture<EmpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
