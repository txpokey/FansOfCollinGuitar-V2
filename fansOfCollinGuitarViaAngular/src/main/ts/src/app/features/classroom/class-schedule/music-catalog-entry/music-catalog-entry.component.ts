import {Component, Input, OnInit} from '@angular/core';
import {ClassSchedulePlannerComponent} from "../class-schedule-planner/class-schedule-planner.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'music-catalog-entry',
  templateUrl: './music-catalog-entry.component.html',
  styleUrls: ['./music-catalog-entry.component.css']
})
export class MusicCatalogEntryComponent implements OnInit {
  @Input() inputKey : any ;
  discipline: string;
  semester: string;
  year: number;
  guitarCourse: any ;

  constructor(private planner: ClassSchedulePlannerComponent, private modalService: NgbModal) {
  }
  ngOnInit() {
    // let myPlan = this.planner.musicCatalogReportData;
    // this.isLookupInScope();
    this.processInputKey( this.inputKey ) ;
  }
  isLookupInScope() { // DEBUG
    // let musicKey0 = {schoolSemester: 'spring', schoolYear: 2018, discipline: 'MUSI'};
    let musicKey = {schoolSemester: this.semester, schoolYear: this.year, discipline: this.discipline};
    let myLookup: any[] = this.findClasses(musicKey);
    // console.log("musicKey:> " + musicKey);
    // console.log("myLookup:> " + myLookup.length);
  }

  findClasses( key: any ): any[] {
    let myLookup: any[] = this.planner.findClassesFromMusicCatalogBySchoolTermAsArray(key);
    return myLookup ;
  }

  private processInputKey( inputReceived : any ) : void {
    this.discipline = inputReceived.discipline ;
    this.semester = inputReceived.semester ;
    this.year = inputReceived.year ;
  }

  assembleCourseScheduleElementInputKey( inputReceived: any ) : any {
    let candidate = { semester: inputReceived.schoolTerm , year: inputReceived.schoolYear , discipline: inputReceived.discipline } ;

    // let guitarKey = {
    //   schoolSemester: obj.schoolSemester,
    //   schoolYear: obj.schoolYear,
    //   discipline: pay.Subj,
    //   course: pay.Crse
    // };

    return {} ;
  }

  openBackDropCustomClass(guitarCourse,content) {
    this.guitarCourse = guitarCourse ;
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }


}
