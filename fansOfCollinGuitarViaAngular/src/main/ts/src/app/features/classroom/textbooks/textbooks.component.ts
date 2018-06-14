import {Component, OnInit} from '@angular/core';
import {IGuitarBooks} from "./GuitarBooks";
import {
  FileAsSourceForJsonService,
  GuitarApiObserver,
  GuitarApiObserverContract, GuitarApiObserverPollingContract
} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {TabStateComponent} from "../../../services/tab-state/tab-state.component";
import {IncludeTemplateComponent} from "../../../services/include-template/include-template.component";
import {HttpClient, HttpResponse} from "@angular/common/http";

const booksSetupUri  = "/assets/json/textbooks-controller.json" ;

@Component({
  selector: 'guitar-books',
  templateUrl: './textbooks.component.html',
  providers: [FileAsSourceForJsonService,TabStateComponent, IncludeTemplateComponent],
  styleUrls: ['./textbooks.component.css']
})
export class TextbooksComponent implements OnInit , GuitarApiObserverPollingContract {
  textbooks: IGuitarBooks ;

  constructor(public textbookTab: TabStateComponent, private service: FileAsSourceForJsonService ) { }
  lookupAgent : GuitarApiObserverContract ;

  ngOnInit() {
    let clientStub  : HttpClient = this.service.getHttpClient() ;
    let agent : GuitarApiObserverContract  = new GuitarApiObserver( booksSetupUri , clientStub ) ;
    this.lookupAgent = agent ;
    let spun:  boolean = agent.spinUp() ;
    console.log("textbooksComponent is HERE:> " + spun );
  }
 ngOnInit0() {
    let observe: any  = this.service.getBooksSetUp() ;
    console.log(observe);
    observe.forEach( ( dat: HttpResponse<IGuitarBooks> ) => {
      this.textbooks = dat.body ;
      console.log(dat);
    });
    console.log("textbooksComponent is HERE:> ");
  }

  isReady() : boolean {
    let ret : boolean = false ;
    if( this.lookupAgent.isReady() ) {
      let candidate : any = this.lookupAgent.getPayload() ;
      this.textbooks = candidate ;
      ret = true ;
    }
    return ret ;
  }
}
