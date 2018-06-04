import { Component, OnInit } from '@angular/core';
import {IGuitarLinks} from "./GuitarLinks";
import {FileAsSourceForJsonService} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";

@Component({
  selector: 'guitar-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  guitarProgramLinks : IGuitarLinks[] ;
  constructor(private service: FileAsSourceForJsonService) {  }

  ngOnInit() {
    let myAny: any  = this.service.getLinksSetUp() ;
    this.guitarProgramLinks = myAny ;
    console.log("linksComponent is HERE:> " + myAny );
  }

}
