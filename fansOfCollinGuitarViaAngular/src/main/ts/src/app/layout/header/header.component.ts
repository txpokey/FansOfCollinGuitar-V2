import {Component, OnInit} from '@angular/core';
import {IHeaderConfig} from "../header/HeaderConfig";
import {
  FileAsSourceForJsonService,
  GuitarApiComponentBaseClass,
  GuitarApiObserverPollingContract
} from "../../services/file-as-source-for-json/file-as-source-for-json.service";

const carouselSlideDeck = [0, 1, 2];
const setupUri  = "/assets/json/header-controller.json" ;

@Component({
  selector: 'guitar-header',
  templateUrl: './header.component.html',
  providers: [FileAsSourceForJsonService],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends GuitarApiComponentBaseClass<IHeaderConfig> implements GuitarApiObserverPollingContract {

  public carouselSlideDeck: number[] = carouselSlideDeck ;
  public targets;
  public title;

  constructor( private service: FileAsSourceForJsonService ) { super( setupUri , service.getHttpClient() ) ;}

   isReady() : boolean {
    let ret : boolean = false ;
    if(this.getNetworker().isReady() ) {
      let candidate : any = this.getNetworker().getPayload() ;
      this.targets = candidate.targets;
      this.title = candidate.title;
      ret = true ;
    }
    return ret ;
  }
}
