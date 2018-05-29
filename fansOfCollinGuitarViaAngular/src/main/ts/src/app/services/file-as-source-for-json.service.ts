import {Injectable, OnInit} from '@angular/core';
// import {Http, Response} from '@angular/http';
import {IFooterConfig} from "../layout/footer/FooterConfig";
import {IFooterConfigDetail} from "../layout/footer/FooterConfigDetail";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';

const footerSetupUrl = "../../assets/json/footer-controller.json";

@Injectable({
  providedIn: 'root'
})
export class FileAsSourceForJsonService implements OnInit {
  private myAny : any ;
  // constructor() { }
  // constructor( private _http: Http ) { }
  constructor( private _http: HttpClient ) { }

  ngOnInit(): void {
    console.log("FileAsSourceForJsonService is HERE");
  }

  getFooterSetUp() {
    // return this.privateGetFooterSetUpFromArray();  // WORKS
    return this.privateGetFooterSetUpFromHttp() ;
  }

  private privateGetFooterSetUpFromHttp(): any[] {
    this.myAny = this._http.get(footerSetupUrl);
    return this.myAny ;
    // return;
  }

  private privateGetFooterSetUpFromArray(): IFooterConfig[] {
    return [
      {
        "label": "Guitar Studies Social Media Contacts",
        "runtime": ["guitar-dept-display-flex-column", "guitar-dept-display-flex-nowrap"],
        "payload": [
          {
            "label": "Faculty",
            "icon": "fa fa-graduation-cap",
            "logo": "#0",
            "url": "mailto:fvera@collin.edu"
          }
        ]
      }
    ];
  }

  private privateGetFooterSetUpFromArray0(): IFooterConfigDetail[] {
    return [
      {
        "label": "Faculty",
        "icon": "fa fa-graduation-cap",
        "logo": "#0",
        "url": "mailto:fvera@collin.edu"
      }];
  }

}
