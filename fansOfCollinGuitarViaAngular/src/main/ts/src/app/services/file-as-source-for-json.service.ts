import { Injectable , OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

const footerSetupUrl = "../../assets/json/footer-controller.json";

@Injectable({
  providedIn: 'root'
})
export class FileAsSourceForJsonService implements OnInit {
  public _footerSetupUrl = footerSetupUrl ;
  // constructor( private _http: Http  ) { }
  constructor() { }

  footerSetupData : any[] = this.privateGetFooterSetUpFromArray() ;

  ngOnInit(): void {
    // this.getFooterSetUp() ;
  }
  getFooterSetUp() {
    // return this._http.get(this._footerSetupUrl);
  }
  private privateGetFooterSetUpFromArray(): any[] {
      return [
        {
          "label": "Faculty",
          "icon" : "fa fa-graduation-cap",
          "logo" : "#0",
          "url": "mailto:fvera@collin.edu"
        }];
  }
}
