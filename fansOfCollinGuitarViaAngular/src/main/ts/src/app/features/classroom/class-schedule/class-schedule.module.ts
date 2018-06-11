import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicCatalogEntryComponent} from "./music-catalog-entry/music-catalog-entry.component";
import { CourseScheduleEntryComponent } from './course-schedule-entry/course-schedule-entry.component';
import { ClassSchedulePlannerComponent } from './class-schedule-planner/class-schedule-planner.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  declarations: [MusicCatalogEntryComponent, CourseScheduleEntryComponent, ClassSchedulePlannerComponent],
  exports: [MusicCatalogEntryComponent, CourseScheduleEntryComponent, ClassSchedulePlannerComponent]
})
export class ClassScheduleModule { }
