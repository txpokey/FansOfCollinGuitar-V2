import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'include-template',
  templateUrl: './include-template.component.html',
  styleUrls: ['./include-template.component.css']
})
export class IncludeTemplateComponent implements OnInit {

  @Input() requestedUrl : string ;

  public runTimeContent: string = "!AYOOB";
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    // this.runTimeContent = this.getContent();
    console.log("includeTemplateComponent loaded");
  }

  getContent() : string {
    let observed : Observable<string> = this.privateGetTemplateContentFromHttp() ;
    let content : string = "BOOYA!" ;
    observed.forEach( dat => {
      content = dat ;
      console.log(dat);
    }) ;
    return content ;
  }
  private privateGetTemplateContentFromHttp(): Observable<string> {
    let myAny : any ;
    myAny = this._http.get(this.requestedUrl,
      {observe: 'body', responseType: 'text'});
    return myAny;
  }

}
