import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreactiveFormComponent } from './myreactive-form.component';

describe('MyreactiveFormComponent', () => {
  let component: MyreactiveFormComponent;
  let fixture: ComponentFixture<MyreactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyreactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyreactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
