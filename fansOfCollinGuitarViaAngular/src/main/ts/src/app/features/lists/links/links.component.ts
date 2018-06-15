import {Component} from '@angular/core';
import {IGuitarLinks} from "./GuitarLinks";
import {
  FileAsSourceForJsonService,
  GuitarApiComponentBaseClass,
  GuitarApiObserverPollingContract
} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";

const setupUri  = "/assets/json/links-controller.json" ;

@Component({
  selector: 'guitar-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent extends GuitarApiComponentBaseClass<IGuitarLinks[]> implements GuitarApiObserverPollingContract {
  
  guitarProgramLinks : IGuitarLinks[] ;
  constructor( private service: FileAsSourceForJsonService ) { super( setupUri , service.getHttpClient() ) ;}

  isReady() : boolean {
    let ret : boolean = false ;
    if(this.getNetworker().isReady() ) {
      let candidate : any = this.getNetworker().getPayload() ;
      this.guitarProgramLinks = candidate;
      ret = true ;
    }
    return ret ;
  }

}
