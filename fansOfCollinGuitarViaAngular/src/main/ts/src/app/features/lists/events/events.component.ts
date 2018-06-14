import { Component, OnInit } from '@angular/core';
import {
  FileAsSourceForJsonService, GuitarApiObserver, GuitarApiObserverContract,
  GuitarApiObserverPollingContract
} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {IGuitarEvent} from "./GuitarEvent";
import {HttpClient} from "@angular/common/http";

const eventsSetupUri  = "/assets/json/guitarEvents-controller.json" ;

@Component({
  selector: 'guitar-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit , GuitarApiObserverPollingContract{

  guitarProgramEvents: IGuitarEvent[] ;
  constructor(private service: FileAsSourceForJsonService) {  }
  lookupAgent : GuitarApiObserverContract ;

  ngOnInit() {
    let clientStub  : HttpClient = this.service.getHttpClient() ;
    let agent : GuitarApiObserverContract  = new GuitarApiObserver( eventsSetupUri , clientStub ) ;
    this.lookupAgent = agent ;
    let spun:  boolean = agent.spinUp() ;
    console.log("textbooksComponent is HERE:> " + spun );
  }
  // ngOnInit0() {
  //   let myAny: any  = this.service.getEventsSetUp() ;
  //   this.guitarProgramEvents = myAny ;
  //   console.log("eventsComponent is HERE:> " + myAny );
  // }

  isReady(): boolean {
    let ret : boolean = false ;
    if( this.lookupAgent.isReady() ) {
      let candidate : any = this.lookupAgent.getPayload() ;
      this.guitarProgramEvents = candidate ;
      ret = true ;
    }
    return ret ;
  }

}
