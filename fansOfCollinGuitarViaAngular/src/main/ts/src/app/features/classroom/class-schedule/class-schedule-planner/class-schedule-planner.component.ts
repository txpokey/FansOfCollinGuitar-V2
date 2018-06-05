import {Component, OnInit} from '@angular/core';
import {IGuitarProgramCourseScheduleByTerm, IMusicDeptCatalogByTerm} from "../GuitarClassSchedulePlanner";
import {FileAsSourceForJsonService} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";


@Component({
  selector: 'class-schedule-planner',
  templateUrl: './class-schedule-planner.component.html',
  styleUrls: ['./class-schedule-planner.component.css']
})
export class ClassSchedulePlannerComponent implements OnInit {
  musicDeptCatalog : IMusicDeptCatalogByTerm[] ;
  guitarProgramSchedule : IGuitarProgramCourseScheduleByTerm[] ;
  musicCatalogMeta : any = {} ;
  constructor(private service: FileAsSourceForJsonService) {  }

  ngOnInit() {
    let myAny: any  = this.service.getMusicDeptCatalog() ;
    this.musicDeptCatalog = myAny ;
    myAny  = this.service.getGuitarProgramCourseSchedule() ;
    this.guitarProgramSchedule = myAny ;
    this.computeFilteredMusicDisciplines();
    console.log("scheduleComponent is HERE:> " + myAny );
  }

  private composeSingleMap( a: any, b: any ): any {
    let ret = { schoolSemester: a , schoolYear: b } ;
    return ret ;
  }

  private computeFilteredMusicDisciplines(): void {
    let collector: any[] = [] ;
    let yearsFound: Set<number> = new Set( this.musicDeptCatalog.map(obj => obj.schoolYear));
    let semestersFound: Set<string> = new Set( this.musicDeptCatalog.map(obj => obj.schoolSemester));
    let crossProduct: Set<any> = new Set( this.musicDeptCatalog.map(obj => {
      let disciplines = new Set( obj.payload.map( data => data.discipline )) ;
      let sorted = Array.from(disciplines).sort();
      let item = { schoolSemester: obj.schoolSemester , schoolYear: obj.schoolYear, discipline: sorted } ;
      return item ;
    }));
    this.musicCatalogMeta.yearsFound = yearsFound ;
    this.musicCatalogMeta.semestersFound = semestersFound ;
    this.musicCatalogMeta.semestersByYearsFound = Array.from(crossProduct) ;
    return ;
  }
}
