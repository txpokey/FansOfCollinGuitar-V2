import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {GUITARFOOTER, IFooterConfig} from "../../layout/footer/FooterConfig";
import {GUITARHEADER, IHeaderConfig} from "../../layout/header/HeaderConfig";
import {GUITARNEWS, IGuitarNewsConfig} from "../../features/news/GuitarNewsConfig";
import {GUITAREVENTS, IGuitarEvent} from "../../features/lists/events/GuitarEvent";
import {GUITARLINKS, IGuitarLinks} from "../../features/lists/links/GuitarLinks";
import {GUITARBOOKS, IGuitarBooks} from "../../features/classroom/textbooks/GuitarBooks";
import {GUITARFACULTY, IGuitarFaculty} from "../../features/classroom/faculty/GuitarFaculty";
import {
  GUITAR_PROGRAM_COURSE_SCHEDULE,
  IGuitarProgramCourseScheduleByTerm, IMusicDeptCatalogByTerm,
  MUSIC_DEPT_CATALOG
} from "../../features/classroom/class-schedule/GuitarClassSchedulePlanner";


const footerSetupUrl = "../../assets/json/footer-controller.json";
const headerSetupUrl = "../../assets/json/header-controller.json";

@Injectable({
  providedIn: 'root'
})
export class FileAsSourceForJsonService implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    console.log("FileAsSourceForJsonService is HERE: NEVER RUNS");
  }

  public hashKey( key?: any ) : string {
    let hashKey = "" ;
    for( let k in key ) {
      hashKey += key[k] + '|' ;
    }
    return hashKey ;
  }
  getHeaderSetUp() {
    // return this.privateGetHeaderSetUpFromArray();  // WORKS
    return this.privateGetHeaderSetUpFromHttp(); // WORKS
  }

  getFooterSetUp() {
    // return this.privateGetFooterSetUpFromArray();  // WORKS
    return this.privateGetFooterSetUpFromHttp();
  }
  getBooksSetUp() {
    return this.privateGetBooksSetUpFromArray();  // WORKS
    // return this.privateGetEventsSetUpFromHttp(); // STUB
  }

  getEventsSetUp() {
    return this.privateGetEventsSetUpFromArray();  // WORKS
    // return this.privateGetEventsSetUpFromHttp(); // STUB
  }
  getFacultySetUp() {
    return this.privateGetFacultySetUpFromArray();  // WORKS
    // return this.privateGetEventsSetUpFromHttp(); // STUB
  }


  getLinksSetUp() {
    return this.privateGetLinksSetUpFromArray();  // WORKS
    // return this.privateGetEventsSetUpFromHttp(); // STUB
  }
  getMusicDeptCatalog() {
    return this.privateGetMusicDeptCatalogSetUpFromArray(); // INTEST
  }
  getGuitarProgramCourseSchedule() {
    return this.privateGetGuitarProgramCourseScheduleSetUpFromArray(); // WORKS
  }
  getNewsFeed() {
    return this.privateGetNewsFeedFromArray(); // WORKS
  }


  private privateGetHeaderSetUpFromHttp(): Observable<HttpResponse<IHeaderConfig>> {
    let myAny: any = this._http.get<IHeaderConfig>(headerSetupUrl,
      {observe: 'response', responseType: 'json'});
    return myAny;
  }

  private privateGetFooterSetUpFromHttp(): Observable<HttpResponse<IFooterConfig[]>> {
    let myAny: any = this._http.get<IFooterConfig[]>(footerSetupUrl,
      {observe: 'response', responseType: 'json'});
    return myAny;
  }

  // private handleError(err: HttpErrorResponse) {
  // }

  // private privateGetEventsSetUpFromHttp(): Observable<HttpResponse<IFooterConfig[]>> {
  //   let myAny: any = this._http.get<IFooterConfig[]>(footerSetupUrl,
  //     {observe: 'response', responseType: 'json'});
  //   return myAny;
  // }
  private privateGetBooksSetUpFromArray(): IGuitarBooks {
    return GUITARBOOKS ;
  }
  private privateGetEventsSetUpFromArray(): IGuitarEvent[] {
    return GUITAREVENTS ;
  }

  private privateGetFacultySetUpFromArray(): IGuitarFaculty {
    return GUITARFACULTY ;
  }

  private privateGetLinksSetUpFromArray(): IGuitarLinks[] {
    return GUITARLINKS;
  }
  private privateGetMusicDeptCatalogSetUpFromArray(): IMusicDeptCatalogByTerm[] {
    return MUSIC_DEPT_CATALOG;
  }
  private privateGetGuitarProgramCourseScheduleSetUpFromArray(): IGuitarProgramCourseScheduleByTerm[] {
    return GUITAR_PROGRAM_COURSE_SCHEDULE;
  }

  private privateGetNewsFeedFromArray(): IGuitarNewsConfig {
    return GUITARNEWS ;
  }

  private privateGetHeaderSetUpFromArray(): IHeaderConfig {
    return GUITARHEADER;
  }

  private privateGetFooterSetUpFromArray() : IFooterConfig[] {
    return GUITARFOOTER;
  };
  // saving this one for rapid prototyping
  // private privateGetFooterSetUpFromHttp0(): any[] {
  //   this.myAny = this._http.get(footerSetupUrl);
  //   return this.myAny;
  //   // return;
  // }
}

