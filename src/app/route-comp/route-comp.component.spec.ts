import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCompComponent } from './route-comp.component';

describe('RouteCompComponent', () => {
  let component: RouteCompComponent;
  let fixture: ComponentFixture<RouteCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
