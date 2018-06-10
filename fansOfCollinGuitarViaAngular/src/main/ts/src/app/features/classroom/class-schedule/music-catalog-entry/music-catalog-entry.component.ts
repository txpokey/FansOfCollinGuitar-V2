import {Component, Input, OnInit} from '@angular/core';
import {ClassSchedulePlannerComponent} from "../class-schedule-planner/class-schedule-planner.component";

@Component({
  selector: 'music-catalog-entry',
  templateUrl: './music-catalog-entry.component.html',
  styleUrls: ['./music-catalog-entry.component.css']
})
export class MusicCatalogEntryComponent implements OnInit {

  constructor(private planner: ClassSchedulePlannerComponent) {
  }

// { schoolSemester:  schoolTerm.schoolSemester , schoolYear: schoolTerm.schoolYear , discipline: musicDiscipline };
  @Input() semester: string;
  @Input() year: number;
  @Input() discipline: string;

  isLookupInScope() {
    let musicKey0 = {schoolSemester: 'spring', schoolYear: 2018, discipline: 'MUSI'};
    let musicKey = {schoolSemester: this.semester, schoolYear: this.year, discipline: this.discipline};
    // let myLookup: any[] = this.planner.findClassesFromMusicCatalogBySchoolTermAsArray(musicKey);
    let myLookup: any[] = this.findClasses(musicKey);
    console.log("musicKey:> " + musicKey);
    console.log("myLookup:> " + myLookup.length);
  }

  findClasses( key: any ): any[] {
    let myLookup: any[] = this.planner.findClassesFromMusicCatalogBySchoolTermAsArray(key);
    return myLookup ;
  }
  findClasses_0( key: any ): any[] {
    let myLookup: any[] = this.planner.findClassesFromMusicCatalogBySchoolTermAsArray(key);
    return myLookup ;
  }

  ngOnInit() {
    let myPlan = this.planner.musicCatalogMeta;
    this.isLookupInScope();
  }

}
