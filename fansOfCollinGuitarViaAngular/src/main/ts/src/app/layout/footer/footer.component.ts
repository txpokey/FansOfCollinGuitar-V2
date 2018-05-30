import { Component, OnInit } from '@angular/core';
import {FileAsSourceForJsonService} from "../../services/file-as-source-for-json.service";
import {IFooterConfig} from "./FooterConfig";


@Component({
  selector: 'guitar-footer',
  templateUrl: './footer.component.html',
  providers: [FileAsSourceForJsonService],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private errorMessage : any ;
  private touchStone : IFooterConfig ;
  private data : IFooterConfig[] ;
  constructor( private _service: FileAsSourceForJsonService ) { }

  // ngOnInit1() {
  //   this._service.getFooterSetUp()
  //     .subscribe(data  => this.data = data ,
  //       error => this.errorMessage = <any>error);
  //   this.touchStone = null ;
  //   console.log("FooterComponent is HERE");
  // }
  // ngOnInit0() {
  //   this.serviceStone = this._service.getFooterSetUp() ;
  //   this.touchStone = this.serviceStone[0] ;
  //   console.log("FooterComponent is HERE");
  // }
  ngOnInit() {
    this.data = this._service.getFooterSetUp() ;
    this.touchStone = this.data[0] ;
    console.log("FooterComponent is HERE");
  }

}

