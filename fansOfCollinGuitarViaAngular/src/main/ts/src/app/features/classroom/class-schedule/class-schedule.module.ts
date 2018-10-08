import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassSchedulePlannerComponent} from './class-schedule-planner/class-schedule-planner.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  // declarations: [MusicCatalogEntryComponent, CourseScheduleEntryComponent, ClassSchedulePlannerComponent],
  // exports: [MusicCatalogEntryComponent, CourseScheduleEntryComponent, ClassSchedulePlannerComponent]
  declarations: [ ClassSchedulePlannerComponent],
  exports: [ClassSchedulePlannerComponent]
})
export class ClassScheduleModule { }
