import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseScheduleEntryComponent } from './course-schedule-entry.component';

describe('CourseScheduleEntryComponent', () => {
  let component: CourseScheduleEntryComponent;
  let fixture: ComponentFixture<CourseScheduleEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseScheduleEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseScheduleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
