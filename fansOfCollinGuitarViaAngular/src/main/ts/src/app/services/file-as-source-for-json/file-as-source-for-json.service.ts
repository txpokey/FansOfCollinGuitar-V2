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
  IGuitarProgramCourseScheduleByTerm,
  IMusicDeptCatalogByTerm,
  MUSIC_DEPT_CATALOG
} from "../../features/classroom/class-schedule/GuitarClassSchedulePlanner";
import {YOU_TUBE_PLAYLISTS_BY_CHANNEL_RESPONSE} from "../../features/performances/ut/constants/2018/spring/YouTubePlaylistsByChannelQuery";
import {IYouTubeChannelQueryResponse, IYouTubePlaylist} from "../../features/performances/ut/YouTubePlayListData";
import {YOU_TUBE_PLAYLISTS} from "../../features/performances/ut/constants/2018/spring/YouTubePlaylistQuery";
import {isUndefined} from "util";

const footerSetupUrl = "../../assets/json/footer-controller.json";
const headerSetupUrl = "../../assets/json/header-controller.json";
const booksSetupUri  = "/assets/json/textbooks-controller.json" ;

export interface GuitarApiObserverPollingContract {
  isReady() : boolean ;
}
export interface GuitarApiObserverContract extends GuitarApiObserverPollingContract{

  isDefined( underTest: any ) : boolean ;
  spinUp() : boolean ;
  getPayload() : any ;

}

export abstract class GuitarApiComponentBaseClass<T> implements OnInit {
  protected lookupAgent : GuitarApiObserverContract ;
  protected constructor(protected setupUri : string, private clientStub: HttpClient) { }
  ngOnInit() {
    let clientStub  : HttpClient = this.getHttpClient() ;
    let agent : GuitarApiObserverContract  = new GuitarApiObserver<T>(this.setupUri , clientStub ) ;
    this.lookupAgent = agent ;
    let spun:  boolean = agent.spinUp() ;
    console.log("spinup is HERE:> " + spun );
  }
  getNetworker() : GuitarApiObserverContract {
    return this.lookupAgent ;
  }
  private getHttpClient() : HttpClient {
    return this.clientStub;
  }
}
export class GuitarApiObserver<T> implements GuitarApiObserverContract {

  private observable : Observable<HttpResponse<T>> ;
  private payload : T ;
  constructor(private uri: string , private clientStub : HttpClient) {
    let candidate = this.supplyObserver( clientStub , uri ) ;
    this.observable = candidate ;
  }
  isDefined( underTest: any ) : boolean {
    let candidate = isUndefined( underTest ) ;
    return !candidate ;
  }
  isReady() : boolean {
    return this.isDefined( this.getPayload() ) ;
  }
  private getObserver() : Observable<HttpResponse<T>> {
    return this.observable ;
  }
  getPayload() : any {
    return this.payload ;
  }
  private supplyObserver( http: HttpClient , uri : string ) : Observable<HttpResponse<T>> {
    let observe: Observable<HttpResponse<T>> = http.get<T>(uri ,
      {observe: 'response', responseType: 'json'});
    return observe;
  }
  spinUp() : boolean {
    this.getObserver().forEach( ( dat: HttpResponse<any> ) => {
      this.payload = dat.body ;
      console.log("guitarObserver:spinUp> " + dat);
    });
    return this.isReady() ;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FileAsSourceForJsonService implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    console.log("FileAsSourceForJsonService is HERE: NEVER RUNS");
  }

  getHttpClient() : HttpClient {
    return this._http ;
  }

  public hashKey( key?: any ) : string {
    let hashKey = "" ;
    for( let k in key ) {
      hashKey += key[k] + '|' ;
    }
    return hashKey ;
  }
  getHeaderSetUp() {
    // return this.privateGetHeaderSetUpFromArray();  //  WORKS : not used
    return this.privateGetHeaderSetUpFromHttp(); //  WORKS : not used
  }

  getFooterSetUp() {
    // return this.privateGetFooterSetUpFromArray();  // WORKS
    return this.privateGetFooterSetUpFromHttp();
  }

  getBooksSetUp() {
    // return this.privateGetBooksSetUpFromArray();  // WORKS : not used
    // return this.privateGetBooksSetUpFromHttp();  // WORKS : NOT used
  }

  getEventsSetUp() {
    return this.privateGetEventsSetUpFromArray();  // WORKS : not used
    // return this.privateGetEventsSetUpFromHttp(); // STUB
  }
  getFacultySetUp() {
    return this.privateGetFacultySetUpFromArray();  // WORKS : not used
    // return this.privateGetEventsSetUpFromHttp(); // STUB
  }
  getGuitarProgramCourseSchedule() {
    return this.privateGetGuitarProgramCourseScheduleSetUpFromArray(); // WORKS
  }

  getLinksSetUp() {
    return this.privateGetLinksSetUpFromArray();  // WORKS : not used
    // return this.privateGetEventsSetUpFromHttp(); // STUB
  }
  getMusicDeptCatalog() {
    return this.privateGetMusicDeptCatalogSetUpFromArray(); // WORKS
  }
  getNewsFeed() {
    return this.privateGetNewsFeedFromArray(); // WORKS : not used
  }
  getPerformancesByYearBySemester() {
    return this.privatePerformancesByYearBySemester(); // WORKS
  }
  getPerformancesPlaylists() {
    return this.privatePerformancePlaylists(); // WORKS
  }

  private privateGetHeaderSetUpFromHttp(): Observable<HttpResponse<IHeaderConfig>> {
    let myAny: any = this._http.get<IHeaderConfig>(headerSetupUrl,
      {observe: 'response', responseType: 'json'});
    return myAny;
  }
  // IFooterConfig
  private privateGetFooterSetUpFromHttp(): Observable<HttpResponse<any[]>> {
    let myAny: any = this._http.get<any[]>(footerSetupUrl,
      {observe: 'response', responseType: 'json'});
    console.log(myAny);
    return myAny;
  }

  private privateGetBooksSetUpFromHttp(): Observable<HttpResponse<any>> {
    let observe: Observable<HttpResponse<any[]>> = this._http.get<any>(booksSetupUri,
      {observe: 'response', responseType: 'json'});
    return observe;
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

  private privatePerformancesByYearBySemester(): IYouTubeChannelQueryResponse {
    return YOU_TUBE_PLAYLISTS_BY_CHANNEL_RESPONSE ;
  }

  private privatePerformancePlaylists(): IYouTubePlaylist[] {
    return YOU_TUBE_PLAYLISTS ;
  }



  // saving this one for rapid prototyping
  // private privateGetFooterSetUpFromHttp0(): any[] {
  //   this.myAny = this._http.get(footerSetupUrl);
  //   return this.myAny;
  //   // return;
  // }
}

