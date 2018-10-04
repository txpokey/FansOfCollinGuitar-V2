import {Component} from '@angular/core';
import {
  FileAsSourceForJsonService,
  GuitarApiComponentBaseClass,
  GuitarApiObserverPollingContract
} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {IGuitarEvent} from "./GuitarEvent";
import {ConstantsContract} from "../../../services/constants/ConstantsContract";

// const setupUri  = "/assets/json/guitarEvents-controller.json" ;
const setupUri  = ConstantsContract.SpringbootBaseUrl + "/api/collegeEvents" ;

@Component({
  selector: 'guitar-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent extends GuitarApiComponentBaseClass<IGuitarEvent[]> implements GuitarApiObserverPollingContract {

  guitarProgramEvents: IGuitarEvent[] ;
  constructor( private service: FileAsSourceForJsonService ) { super( setupUri , service.getHttpClient() ) ;}

  isReady() : boolean {
    let ret : boolean = false ;
    if(this.getNetworker().isReady() ) {
      let candidate : any = this.getNetworker().getPayload() ;
      this.guitarProgramEvents = candidate._embedded.collegeEvents ;
      ret = true ;
    }
    return ret ;
  }

}
