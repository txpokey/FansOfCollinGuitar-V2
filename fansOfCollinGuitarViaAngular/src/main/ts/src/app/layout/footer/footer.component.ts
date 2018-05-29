import { Component, OnInit } from '@angular/core';
// import {ServicesModule} from "../../services/services.module";
import {FileAsSourceForJsonService} from "../../services/file-as-source-for-json.service";

@Component({
  selector: 'guitar-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private touchStone : string ;
  private serviceStone : any[] ;
  constructor( private _service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    this.serviceStone = this._service.getFooterSetUp() ;
    this.touchStone = this._service._footerSetupUrl ;
    console.log("FooterComponent is HERE");

  }

}
