import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'include-template',
  templateUrl: './include-template.component.html',
  styleUrls: ['./include-template.component.css']
})
export class IncludeTemplateComponent implements OnInit {

  @Input() requestedUrl: string;

  public runTimeContent: string;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this.privateGetContent();
    console.log("includeTemplateComponent loaded");
  }

  isContentLoaded(): boolean {
    return undefined !== this.runTimeContent;
  }

  getContent(): string {
    return this.runTimeContent;
  }

  getContent0(): string {
    let ret: string = "!AYOOB";
    ret = this.isContentLoaded() ? this.runTimeContent : this.runTimeContent = this.privateGetContent();
    return ret;
  }

  private privateGetContent(): string {
    let observed: Observable<string> = this.privateGetTemplateContentFromHttp();
    let content: string = "BOOYA!";
    observed.subscribe(payload => this.runTimeContent = payload);
    return content;
  }

  private privateGetTemplateContentFromHttp(): Observable<string> {
    let myAny: any;
    myAny = this._http.get(this.requestedUrl,
      {observe: 'body', responseType: 'text'});
    return myAny;
  }

}
