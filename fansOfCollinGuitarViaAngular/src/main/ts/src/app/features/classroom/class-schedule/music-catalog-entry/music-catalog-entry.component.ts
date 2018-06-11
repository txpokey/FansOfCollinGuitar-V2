import {Component, Input, OnInit} from '@angular/core';
import {ClassSchedulePlannerComponent} from "../class-schedule-planner/class-schedule-planner.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'music-catalog-entry',
  templateUrl: './music-catalog-entry.component.html',
  styleUrls: ['./music-catalog-entry.component.css']
})
export class MusicCatalogEntryComponent implements OnInit {
  @Input() semester: string;
  @Input() year: number;
  @Input() discipline: string;

  constructor(private planner: ClassSchedulePlannerComponent, private modalService: NgbModal) {
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
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
  ngOnInit() {
    // let myPlan = this.planner.musicCatalogReportData;
    // this.isLookupInScope();
  }

}
