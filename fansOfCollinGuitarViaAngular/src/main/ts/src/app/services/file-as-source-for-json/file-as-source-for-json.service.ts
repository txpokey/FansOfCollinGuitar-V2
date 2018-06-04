import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {GUITARFOOTER, IFooterConfig} from "../../layout/footer/FooterConfig";
import {GUITARHEADER, IHeaderConfig} from "../../layout/header/HeaderConfig";
import {GUITARNEWS, IGuitarNewsConfig} from "../../features/news/GuitarNewsConfig";
import {GUITAREVENTS, IGuitarEvent} from "../../features/lists/events/GuitarEvent";

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

  getHeaderSetUp() {
    // return this.privateGetHeaderSetUpFromArray();  // WORKS
    return this.privateGetHeaderSetUpFromHttp(); // WORKS
  }

  getFooterSetUp() {
    // return this.privateGetFooterSetUpFromArray();  // WORKS
    return this.privateGetFooterSetUpFromHttp();
  }

  getEventsSetUp() {
    return this.privateGetEventsSetUpFromArray();  // INTEST
    // return this.privateGetEventsSetUpFromHttp(); // STUB
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

  private privateGetEventsSetUpFromArray(): IGuitarEvent[] {
    return GUITAREVENTS ;
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

