import { Component, OnInit } from '@angular/core';
import {IGuitarLinks} from "./GuitarLinks";
import {
  FileAsSourceForJsonService,
  GuitarApiObserver, GuitarApiObserverContract, GuitarApiObserverPollingContract
} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {HttpClient} from "@angular/common/http";

const setupUri  = "/assets/json/links-controller.json" ;

@Component({
  selector: 'guitar-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit , GuitarApiObserverPollingContract {

  guitarProgramLinks : IGuitarLinks[] ;
  constructor(private service: FileAsSourceForJsonService) {  }
  lookupAgent : GuitarApiObserverContract ;

  ngOnInit() {
    let clientStub  : HttpClient = this.service.getHttpClient() ;
    let agent : GuitarApiObserverContract  = new GuitarApiObserver( setupUri , clientStub ) ;
    this.lookupAgent = agent ;
    let spun:  boolean = agent.spinUp() ;
    console.log("spinup is HERE:> " + spun );
  }

  isReady() : boolean {
    let ret : boolean = false ;
    if( this.lookupAgent.isReady() ) {
      let candidate : any = this.lookupAgent.getPayload() ;
      this.guitarProgramLinks = candidate ;
      ret = true ;
    }
    return ret ;
  }

  // ngOnInit0() {
  //   let myAny: any  = this.service.getLinksSetUp() ;
  //   this.guitarProgramLinks = myAny ;
  //   console.log("linksComponent is HERE:> " + myAny );
  // }

}
