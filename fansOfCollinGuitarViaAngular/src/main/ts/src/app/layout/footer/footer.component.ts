import { Component, OnInit } from '@angular/core';
import {IFooterConfig} from "./FooterConfig";
import {Observable} from "rxjs/internal/Observable";
import {HttpResponse} from "@angular/common/http";
import {FileAsSourceForJsonService} from "../../services/file-as-source-for-json/file-as-source-for-json.service";

const EMPTY_URL = '#0' ;

@Component({
  selector: 'guitar-footer',
  templateUrl: './footer.component.html',
  providers: [FileAsSourceForJsonService],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private errorMessage : any ;
  private guitarProgramFooter : IFooterConfig[] ;
  private observe : Observable<HttpResponse<IFooterConfig[]>> ;
  constructor( private service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    this.observe = this.service.getFooterSetUp();
    // this.observe
    //   .subscribe(data  => this.data = data ,
    //     error => this.errorMessage = <any>error);
    this.observe.forEach( ( dat: HttpResponse<IFooterConfig[]> ) => {
      this.guitarProgramFooter = dat.body ;
      console.log(dat);
    });
    console.log("FooterComponent is HERE");
  }
  ngOnInit0() {
    this.observe = this.service.getFooterSetUp() ;
    console.log("FooterComponent is HERE");
  }

  hasIcon = function(candidateLink) {
    return  EMPTY_URL !== candidateLink.icon ;
  };
  hasLogo = function(candidateLink) {
    return  EMPTY_URL !== candidateLink.logo ;
  };
}

