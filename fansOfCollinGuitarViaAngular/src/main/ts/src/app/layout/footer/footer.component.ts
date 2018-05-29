import { Component, OnInit } from '@angular/core';
import {FileAsSourceForJsonService} from "../../services/file-as-source-for-json.service";
import {IFooterDetail} from "./FooterDetail";


@Component({
  selector: 'guitar-footer',
  templateUrl: './footer.component.html',
  providers: [FileAsSourceForJsonService],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private touchStone : IFooterDetail ;
  private serviceStone : IFooterDetail[] ;
  constructor( private _service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    this.serviceStone = this._service.getFooterSetUp() ;
    this.touchStone = this.serviceStone[0] ;
    console.log("FooterComponent is HERE");
  }

}
