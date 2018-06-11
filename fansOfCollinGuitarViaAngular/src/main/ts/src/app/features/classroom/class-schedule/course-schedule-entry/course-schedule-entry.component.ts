import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ClassSchedulePlannerComponent} from "../class-schedule-planner/class-schedule-planner.component";

@Component({
  selector: 'course-schedule-entry',
  templateUrl: './course-schedule-entry.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course-schedule-entry.component.css']
})
export class CourseScheduleEntryComponent implements OnInit {

  @Input() guitarCourse: any;
  @Input() guitarCourseKey: any;

  constructor(private planner: ClassSchedulePlannerComponent, private modalService: NgbModal) {}

  ngOnInit() {
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

  closeResult: string;


  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
  //
  // openBackDropCustomClass(guitarCourse,guitarCourseKey,content) {
  //   this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  // }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
