import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassSchedulePlannerComponent} from './class-schedule-planner/class-schedule-planner.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CourseScheduleEntryComponent} from "./course-schedule-entry/course-schedule-entry.component";

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  // declarations: [MusicCatalogEntryComponent, CourseScheduleEntryComponent, ClassSchedulePlannerComponent],
  // exports: [MusicCatalogEntryComponent, CourseScheduleEntryComponent, ClassSchedulePlannerComponent]
  declarations: [ ClassSchedulePlannerComponent, CourseScheduleEntryComponent],
  exports: [ClassSchedulePlannerComponent,CourseScheduleEntryComponent]
})
export class ClassScheduleModule { }
