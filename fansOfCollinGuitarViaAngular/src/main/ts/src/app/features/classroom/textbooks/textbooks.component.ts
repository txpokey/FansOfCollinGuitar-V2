import {Component, OnInit} from '@angular/core';
import {IGuitarBooks} from "./GuitarBooks";
import {FileAsSourceForJsonService} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {TabStateComponent} from "../../../services/tab-state/tab-state.component";
import {IncludeTemplateComponent} from "../../../services/include-template/include-template.component";
import {HttpResponse} from "@angular/common/http";
import {isUndefined} from "util";

@Component({
  selector: 'guitar-books',
  templateUrl: './textbooks.component.html',
  providers: [FileAsSourceForJsonService,TabStateComponent, IncludeTemplateComponent],
  styleUrls: ['./textbooks.component.css']
})
export class TextbooksComponent implements OnInit {
  textbooks: IGuitarBooks ;

  constructor(public textbookTab: TabStateComponent, private service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    let observe: any  = this.service.getBooksSetUp() ;
    console.log(observe);
    observe.forEach( ( dat: HttpResponse<IGuitarBooks> ) => {
      this.textbooks = dat.body ;
      console.log(dat);
    });
    console.log("textbooksComponent is HERE:> ");
  }

  isDefined( underTest: any ) : boolean {
    let candidate = isUndefined( underTest ) ;
    return !candidate ;
  }
}
