import {Component, OnInit} from '@angular/core';
import {IGuitarProgramCourseScheduleByTerm, IMusicDeptCatalogByTerm} from "../GuitarClassSchedulePlanner";
import {FileAsSourceForJsonService} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {isUndefined} from "util";


@Component({
  selector: 'class-schedule-planner',
  templateUrl: './class-schedule-planner.component.html',
  styleUrls: ['./class-schedule-planner.component.css']
})
export class ClassSchedulePlannerComponent implements OnInit {
  musicDeptCatalog : IMusicDeptCatalogByTerm[] ;
  guitarProgramSchedule : IGuitarProgramCourseScheduleByTerm[] ;
  musicCatalogMeta : any = {} ;
  guitarSectionMeta : any = {} ;
  constructor(private service: FileAsSourceForJsonService) {  }

  ngOnInit() {
    let myAny: any  = this.service.getMusicDeptCatalog() ;
    this.musicDeptCatalog = myAny ;
    myAny  = this.service.getGuitarProgramCourseSchedule() ;
    this.guitarProgramSchedule = myAny ;
    this.computeMusicDisciplineMaps();
    this.computeGuitarSectionMaps();
    console.log("scheduleComponent is HERE:> " + myAny );
  }

  private composeSingleMap( a: any, b: any ): any {
    let ret = { schoolSemester: a , schoolYear: b } ;
    return ret ;
  }
  private hashKey( key: any ): string {
    return this.service.hashKey(key) ;
  }

  private computeGuitarSectionMaps(): void {
    let collector: any[] = [] ;
    let yearsFound: Set<number> = new Set( this.guitarProgramSchedule.map(obj => obj.schoolYear));
    let semestersFound: Set<string> = new Set( this.guitarProgramSchedule.map(obj => obj.schoolSemester));
    let groupBy = new Map() ;
    this.guitarProgramSchedule.forEach( obj =>
      obj.payload.forEach( pay => this.computeGroupByMapForGuitarSections( obj, pay, groupBy )  )) ;

    this.guitarSectionMeta.yearsFound = yearsFound ;
    this.guitarSectionMeta.semestersFound = semestersFound ;
    this.guitarSectionMeta.groupBy = groupBy ;
    return ;
  }
  private computeGroupByMapForGuitarSections( obj: any , pay: any, g: Map<any,any> ): any {
    let musicKey = { schoolSemester: obj.schoolSemester , schoolYear: obj.schoolYear, discipline: pay.Subj } ;
    let guitarKey = { schoolSemester: obj.schoolSemester , schoolYear: obj.schoolYear, discipline: pay.Subj , course: pay.Crse } ;
    let guitarKeyAsObject = { schoolSemester: obj.schoolSemester , schoolYear: obj.schoolYear, discipline: pay.Subj , course: pay.Crse } ;
    let hash = this.hashKey( guitarKey );
    let withGKey = guitarKey['gKeyAsObject'] = guitarKeyAsObject ;
    let withMKey = guitarKey['mKeyAsObject'] = musicKey ;
    let newPay = guitarKey['pay'] = pay ;

    let discovered = g.get(hash);
    // value = 'undefined' === typeof value ? [pay] : value.push( pay ) ;
    let depth = isUndefined(discovered) ? (discovered = []).push(guitarKey) : discovered.push( guitarKey ) ;
    let revalue = g.set(hash,discovered);
    let allKeysNow = Array.from( g.keys() );
    let count = allKeysNow.length ;
    return ;
  }

  private computeGroupByMapForGuitarSections_0( obj: any , pay: any, g: Map<any,any> ): any {
    let key = { schoolSemester: obj.schoolSemester , schoolYear: obj.schoolYear, discipline: pay.Subj } ;
    let newAddition = { schoolSemester: obj.schoolSemester , schoolYear: obj.schoolYear, discipline: pay.Subj, pay: pay } ;
    let hash = this.hashKey( key );
    let discovered = g.get(hash);
    // value = 'undefined' === typeof value ? [pay] : value.push( pay ) ;
    let depth = isUndefined(discovered) ? (discovered = []).push(newAddition) : discovered.push( newAddition ) ;
    let revalue = g.set(hash,discovered);
    let allKeysNow = Array.from( g.keys() );
    let count = allKeysNow.length ;
    return ;
  }

  private computeMusicDisciplineMaps(): void {
    let collector: any[] = [] ;
    let yearsFound: Set<number> = new Set( this.musicDeptCatalog.map(obj => obj.schoolYear));
    let semestersFound: Set<string> = new Set( this.musicDeptCatalog.map(obj => obj.schoolSemester));
    let crossProduct: Set<any> = new Set( this.musicDeptCatalog.map(obj => {
      let groupByDiscipline = [] ;
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
