import {Component, Injectable, OnInit} from '@angular/core';
import {IGuitarProgramCourseScheduleByTerm, IMusicDeptCatalogByTerm} from "../GuitarClassSchedulePlanner";
import {FileAsSourceForJsonService} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {isUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'class-schedule-planner',
  templateUrl: './class-schedule-planner.component.html',
  styleUrls: ['./class-schedule-planner.component.css']
})
export class ClassSchedulePlannerComponent implements OnInit {
  musicDeptCatalog: IMusicDeptCatalogByTerm[];
  guitarProgramSchedule: IGuitarProgramCourseScheduleByTerm[];
  musicCatalogReportData: any = {};
  guitarSectionReportData: any = {};

  constructor(private service: FileAsSourceForJsonService) {
  }

  ngOnInit() {
    this.musicDeptCatalog = this.service.getMusicDeptCatalog();
    this.guitarProgramSchedule = this.service.getGuitarProgramCourseSchedule();
    this.computeGuitarProgramReportData();
    this.computeMusicCalalogReportData();
    console.log("scheduleComponent is HERE!");
  }

  private hashKey(key: any): string {
    return this.service.hashKey(key);
  }

  findClassesFromMusicCatalogBySchoolTermAsArray(lookupKey: any): any {
    let ret0 = this.musicCatalogReportData.groupBy.get(this.hashKey(lookupKey));
    let ret = ret0.payload;
    return ret;
  }

  private computeGuitarProgramReportData(): void {
    let yearsFound: Set<number> = new Set(this.guitarProgramSchedule.map(obj => obj.schoolYear));
    let semestersFound: Set<string> = new Set(this.guitarProgramSchedule.map(obj => obj.schoolSemester));
    let guitarGroupBy = new Map();
    let musicGroupBy = new Map();
    this.guitarProgramSchedule.forEach(obj =>
      obj.payload.forEach(pay => {
        this.computeGroupByMapForGuitarSections(obj, pay, guitarGroupBy);
        this.computeGroupByMapForMusicCoursesUsingGuitarProgramData(obj, pay, musicGroupBy);
      }));

    this.guitarSectionReportData.yearsFound = yearsFound;
    this.guitarSectionReportData.semestersFound = semestersFound;
    this.guitarSectionReportData.groupBy = guitarGroupBy;
    this.guitarSectionReportData.musicCatalogGroupBy = musicGroupBy;

    return;
  }

  private computeGroupByMapForGuitarSections(obj: any, pay: any, g: Map<any, any>): any {
    let musicKey = {schoolSemester: obj.schoolSemester, schoolYear: obj.schoolYear, discipline: pay.Subj};
    let guitarKey = {
      schoolSemester: obj.schoolSemester,
      schoolYear: obj.schoolYear,
      discipline: pay.Subj,
      course: pay.Crse
    };
    let guitarKeyAsObject = {
      schoolSemester: obj.schoolSemester,
      schoolYear: obj.schoolYear,
      discipline: pay.Subj,
      course: pay.Crse
    };
    let hash = this.hashKey(guitarKey);
    let withGKey = guitarKey['gKeyAsObject'] = guitarKeyAsObject;
    let withMKey = guitarKey['mKeyAsObject'] = musicKey;
    let newPay = guitarKey['pay'] = pay;

    let discovered = g.get(hash);
    let depth = isUndefined(discovered) ? (discovered = []).push(guitarKey) : discovered.push(guitarKey);
    let revalue = g.set(hash, discovered);
    let allKeysNow = Array.from(g.keys());
    let count = allKeysNow.length;
    return;
  }

  private computeGroupByMapForMusicCoursesUsingGuitarProgramData(obj: any, pay: any, g: Map<any, any>): any {
    let musicKey = {schoolSemester: obj.schoolSemester, schoolYear: obj.schoolYear, discipline: pay.Subj};
    let guitarKey = {
      schoolSemester: obj.schoolSemester,
      schoolYear: obj.schoolYear,
      discipline: pay.Subj,
      course: pay.Crse
    };
    let guitarKeyAsObject = {
      schoolSemester: obj.schoolSemester,
      schoolYear: obj.schoolYear,
      discipline: pay.Subj,
      course: pay.Crse
    };
    let musicKeyHash = this.hashKey(musicKey);
    let guitarKeyHash = this.hashKey(guitarKey);
    let withGKey = guitarKey['gKeyAsObject'] = guitarKeyAsObject;
    let withMKey = guitarKey['mKeyAsObject'] = musicKey;
    let newPay = guitarKey['pay'] = pay;

    let discovered = g.get(musicKeyHash);
    let depth = isUndefined(discovered) ? (discovered = new Map()).set(guitarKeyHash, guitarKey) : discovered.set(guitarKeyHash, guitarKey);
    let revalue = g.set(musicKeyHash, discovered);
    let allKeysNow = Array.from(g.keys());
    let count = allKeysNow.length;
    return;
  }

  private computeMusicCalalogReportData(): void {
    this.computerMusicCatalogReportSemesterByYearsData();
    this.computerMusicCatalogReportGroupByData();
  }

  private computerMusicCatalogReportSemesterByYearsData(): void {
    // let collector: any[] = [];
    let yearsFound: Set<number> = new Set(this.musicDeptCatalog.map(obj => obj.schoolYear));
    let semestersFound: Set<string> = new Set(this.musicDeptCatalog.map(obj => obj.schoolSemester));
    let projectionOnDiscipline: Set<any> = new Set(this.musicDeptCatalog.map(obj => {
      // let groupByDiscipline = [];
      let disciplines = new Set(obj.payload.map(data => data.discipline));
      let sortedDisciplines = Array.from(disciplines).sort();
      let item = {schoolSemester: obj.schoolSemester, schoolYear: obj.schoolYear, discipline: sortedDisciplines};
      return item;
    }));
    this.musicCatalogReportData.yearsFound = yearsFound;
    this.musicCatalogReportData.semestersFound = semestersFound;
    this.musicCatalogReportData.semestersByYearsFound = Array.from(projectionOnDiscipline);
    return
  }

  private computerMusicCatalogReportGroupByData(): void {
    let groupByCandidate = new Map();
    this.musicDeptCatalog.forEach(term => {
      term.payload.forEach(termPayloadItem => {
        if (termPayloadItem.relevent) {
          this.computeMusicDepartmentCatalogGroupByItemFromTermPayloadItem(term, termPayloadItem, groupByCandidate);
        }
      });
      console.log("watchTheTerm:> " + term);
    })
    this.musicCatalogReportData.groupBy = groupByCandidate;
    return
  }

  private computeMusicDepartmentCatalogGroupByItemFromTermPayloadItem(term: any, termPayloadItem: any, groupByCandidate: Map<string, any>): void {
    let hashInput = {
      schoolSemester: term.schoolSemester,
      schoolYear: term.schoolYear,
      discipline: termPayloadItem.discipline
    };
    let hashKey = this.hashKey(hashInput);
    let discovered = groupByCandidate.get(hashKey);
    // console.log( "watchTheHashKey:> " + hashKey );

    let depth = isUndefined(discovered) ? (discovered = {
      hashInput: hashInput,
      payload: [termPayloadItem]
    }) : discovered.payload.push(termPayloadItem);
    // console.log( "watchTheDiscovery:> " + discovered );
    groupByCandidate.set(hashKey, discovered);
    return
  }

}
