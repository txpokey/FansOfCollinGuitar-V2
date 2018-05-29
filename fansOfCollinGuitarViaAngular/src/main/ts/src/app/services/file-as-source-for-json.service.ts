import {Injectable, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {IFooterConfig} from "../layout/footer/FooterConfig";
import {IFooterConfigDetail} from "../layout/footer/FooterConfigDetail";


const footerSetupUrl = "../../assets/json/footer-controller.json";

@Injectable({
  providedIn: 'root'
})
export class FileAsSourceForJsonService implements OnInit {
  // constructor( private _http: Http  ) { }
  constructor() {
  }

  ngOnInit(): void {
    console.log("FileAsSourceForJsonService is HERE");
  }

  getFooterSetUp() {
    return this.privateGetFooterSetUpFromArray();
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

  private privateGetFooterSetUpFromHttp(): any[] {
    // return this._http.get(footerSetupUrl);
    return;
  }
}
