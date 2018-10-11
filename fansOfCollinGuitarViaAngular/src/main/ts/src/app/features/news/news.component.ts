import {Component} from '@angular/core';
import {TabStateComponent} from "../../services/tab-state/tab-state.component";
import {IGuitarNewsConfig} from "./GuitarNewsConfig";
import {IncludeTemplateComponent} from "../../services/include-template/include-template.component";
import {
  FileAsSourceForJsonService,
  GuitarApiComponentBaseClass,
  GuitarApiObserverPollingContract
} from "../../services/file-as-source-for-json/file-as-source-for-json.service";

const setupUri  = "/assets/json/news-controller--2018.fall.json" ;

@Component({
  selector: 'guitar-news',
  templateUrl: './news.component.html',
  providers: [FileAsSourceForJsonService,TabStateComponent, IncludeTemplateComponent],
  styleUrls: ['./news.component.css']
})
export class NewsComponent extends GuitarApiComponentBaseClass<IGuitarNewsConfig> implements GuitarApiObserverPollingContract {
  public guitarProgramNews: IGuitarNewsConfig;

  constructor(public tabStates: TabStateComponent, private service: FileAsSourceForJsonService )  { super( setupUri , service.getHttpClient() ) ;}

  isReady() : boolean {
    let ret : boolean = false ;
    if(this.getNetworker().isReady() ) {
      let candidate : any = this.getNetworker().getPayload() ;
      this.guitarProgramNews = candidate ;
      ret = true ;
    }
    return ret ;
  }
}
