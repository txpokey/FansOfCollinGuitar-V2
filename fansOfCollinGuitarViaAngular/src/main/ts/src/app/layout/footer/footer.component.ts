import {Component} from '@angular/core';
import {IFooterConfig} from "./FooterConfig";
import {
    FileAsSourceForJsonService,
    GuitarApiComponentBaseClass,
    GuitarApiObserverPollingContract
} from "../../services/file-as-source-for-json/file-as-source-for-json.service";
import {ConstantsContract} from "../../services/constants/ConstantsContract";

const EMPTY_URL = '#0' ;

const setupUri  = ConstantsContract.SpringbootBaseUrl + "/fans/footer" ;

@Component({
  selector: 'guitar-footer',
  templateUrl: './footer.component.html',
  providers: [FileAsSourceForJsonService],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends GuitarApiComponentBaseClass<IFooterConfig[]> implements GuitarApiObserverPollingContract {
  public guitarProgramFooter : IFooterConfig[] ;
  constructor( private service: FileAsSourceForJsonService ) { super( setupUri , service.getHttpClient() ) ;}

  isReady() : boolean {
    let ret : boolean = false ;
    if(this.getNetworker().isReady() ) {
      let candidate : any = this.getNetworker().getPayload() ;
      this.guitarProgramFooter = candidate;
      ret = true ;
    }
    return ret ;
  }
  hasIcon = function(candidateLink) {
    return  EMPTY_URL !== candidateLink.icon ;
  };
  hasLogo = function(candidateLink) {
    return  EMPTY_URL !== candidateLink.logo ;
  };
}

