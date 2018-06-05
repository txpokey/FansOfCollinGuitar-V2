import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSchedulePlannerComponent } from './class-schedule-planner.component';

describe('ClassSchedulePlannerComponent', () => {
  let component: ClassSchedulePlannerComponent;
  let fixture: ComponentFixture<ClassSchedulePlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSchedulePlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSchedulePlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
