import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ClassSchedulePlannerComponent} from "../class-schedule-planner/class-schedule-planner.component";

@Component({
  selector: 'course-schedule-entry',
  templateUrl: './course-schedule-entry.component.html',
  styleUrls: ['./course-schedule-entry.component.css']
})
export class CourseScheduleEntryComponent implements OnInit {

  @Input() guitarCourse: any;
  @Input() guitarCourseKey: any;
  discipline: string;
  semester: string;
  year: number;
  className: string ;
  course: number ;

  constructor(private planner: ClassSchedulePlannerComponent) {}

  ngOnInit() {
    this.processInputKey( this.guitarCourse , this.guitarCourseKey ) ;
  }
  // let guitarKey = {
  //   schoolSemester: obj.schoolSemester,
  //   schoolYear: obj.schoolYear,
  //   discipline: pay.Subj,
  //   course: pay.Crse
  // };
  findClassSectionsByKey( key: any ) : any[] {
    let foo = this.planner.findClassesFromGuitarProgramScheduleBySchoolTermAsArray( key ) ;
    return foo ;
  }

  private processInputKey( guitarCourse: any, guitarCourseKey : any ) : void {
    this.discipline = guitarCourseKey.discipline ;
    this.semester = guitarCourseKey.semester ;
    this.year = guitarCourseKey.year ;
    this.course = guitarCourse.class ;
    this.className = guitarCourseKey.name ;
  }


}
