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
    let headersForDisplayColumns = [ { pay: this.provideHeadersForDisplayColumns() } ] ;
    let contentArray = this.planner.findClassesFromGuitarProgramScheduleBySchoolTermAsArray( key ) ;
    let candidate = [] ;
    let nArray: any[] = null ;
    candidate.push(...nArray); // CURIOUS
    candidate.push(...headersForDisplayColumns);
    candidate.push(...contentArray);
    return candidate ;
  }

  private processInputKey( guitarCourse: any, guitarCourseKey : any ) : void {
    this.discipline = guitarCourseKey.discipline ;
    this.semester = guitarCourseKey.semester ;
    this.year = guitarCourseKey.year ;
    this.course = guitarCourse.class ;
    this.className = guitarCourseKey.name ;
  }

// <div class="guitar-dept-display-flex-wrap Grid-bordered Grid-cell">
//   <div class="guitar-dept-display-flex-wrap  Grid-cell">{{courseBySections.pay.CRN}}
// </div>
// <div class="guitar-dept-display-flex-wrap  Grid-cell">{{courseBySections.pay.Sec}}
// </div>
// <div class="guitar-dept-display-flex-wrap  Grid-cell">{{courseBySections.pay.Days}}
// </div>
// <div class="guitar-dept-display-flex-wrap  Grid-cell">{{courseBySections.pay.Time}}
// </div>
// <div class="guitar-dept-display-flex-wrap  Grid-cell">
//   {{courseBySections.pay.Location}}
// </div>
// <div class="guitar-dept-display-flex-wrap  Grid-cell">
//   {{courseBySections.pay.Instructor}}

  private provideHeadersForDisplayColumns() : any {
    return HEADERS_FOR_DISPLAY_COLUMNS ;
  }
}
 const HEADERS_FOR_DISPLAY_COLUMNS = {
  "Select": "Select",
  "CRN": "CRN",
  "Subj": "Subject",
  "Crse": "Course",
  "Sec": "Section",
  "Cred": 1,
  "Title": "Title",
  "Days": "Days",
  "Time": "Time",
  "Dates": "Calendar",
  "Location": "Location",
  "Cap": 20,
  "Rem": -2,
  "WLCap": 0,
  "WLRem": "0",
  "Instructor": "Instructor"
} ;
