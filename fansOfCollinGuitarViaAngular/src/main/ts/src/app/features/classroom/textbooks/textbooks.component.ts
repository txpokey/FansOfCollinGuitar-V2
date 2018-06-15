import {Component} from '@angular/core';
import {IGuitarBooks} from "./GuitarBooks";
import {
  FileAsSourceForJsonService,
  GuitarApiComponentBaseClass,
  GuitarApiObserverPollingContract
} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {TabStateComponent} from "../../../services/tab-state/tab-state.component";
import {IncludeTemplateComponent} from "../../../services/include-template/include-template.component";
import {IHeaderConfig} from "../../../layout/header/HeaderConfig";

const setupUri  = "/assets/json/textbooks-controller.json" ;

@Component({
  selector: 'guitar-books',
  templateUrl: './textbooks.component.html',
  providers: [FileAsSourceForJsonService,TabStateComponent, IncludeTemplateComponent],
  styleUrls: ['./textbooks.component.css']
})
export class TextbooksComponent extends GuitarApiComponentBaseClass<IHeaderConfig> implements GuitarApiObserverPollingContract {
  textbooks: IGuitarBooks ;

  constructor(public textbookTab: TabStateComponent, private service: FileAsSourceForJsonService ) { super( setupUri , service.getHttpClient() ) ;}

  isReady() : boolean {
    let ret : boolean = false ;
    if(this.getNetworker().isReady() ) {
      let candidate : any = this.getNetworker().getPayload() ;
      this.textbooks = candidate ;
      ret = true ;
    }
    return ret ;
  }
}
