import { Component, OnInit } from '@angular/core';
import {TabStateComponent} from "../../services/tab-state/tab-state.component";
import {IGuitarNewsConfig} from "./GuitarNewsConfig";
import {IncludeTemplateComponent} from "../../services/include-template/include-template.component";
import {
  FileAsSourceForJsonService,
  GuitarApiObserver, GuitarApiObserverContract, GuitarApiObserverPollingContract
} from "../../services/file-as-source-for-json/file-as-source-for-json.service";
import {HttpClient} from "@angular/common/http";

const setupUri  = "/assets/json/news-controller--2018.spring.json" ;

@Component({
  selector: 'guitar-news',
  templateUrl: './news.component.html',
  providers: [FileAsSourceForJsonService,TabStateComponent, IncludeTemplateComponent],
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit , GuitarApiObserverPollingContract{

  public guitarProgramNews: IGuitarNewsConfig;

  constructor(public tabStates: TabStateComponent, private service: FileAsSourceForJsonService ) { }
  lookupAgent : GuitarApiObserverContract ;

  ngOnInit() {
    let clientStub  : HttpClient = this.service.getHttpClient() ;
    let agent : GuitarApiObserverContract  = new GuitarApiObserver( setupUri , clientStub ) ;
    this.lookupAgent = agent ;
    let spun:  boolean = agent.spinUp() ;
    console.log("spinup is HERE:> " + spun );
  }
  //
  // ngOnInit0() {
  //   this.guitarProgramNews = this.service.getNewsFeed() ;
  //   console.log("newsComponent is HERE");
  // }
  isReady() : boolean {
    let ret : boolean = false ;
    if( this.lookupAgent.isReady() ) {
      let candidate : any = this.lookupAgent.getPayload() ;
      this.guitarProgramNews = candidate ;
      ret = true ;
    }
    return ret ;
  }
}
