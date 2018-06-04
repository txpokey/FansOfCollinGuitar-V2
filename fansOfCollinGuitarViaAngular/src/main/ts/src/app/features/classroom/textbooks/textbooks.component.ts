import {Component, OnInit} from '@angular/core';
import {IGuitarBooks} from "./GuitarBooks";
import {FileAsSourceForJsonService} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {TabStateComponent} from "../../../services/tab-state/tab-state.component";
import {IncludeTemplateComponent} from "../../../services/include-template/include-template.component";

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
    let myAny: any  = this.service.getBooksSetUp() ;
    this.textbooks = myAny ;
    console.log("textbooksComponent is HERE:> " + myAny );
  }

}
