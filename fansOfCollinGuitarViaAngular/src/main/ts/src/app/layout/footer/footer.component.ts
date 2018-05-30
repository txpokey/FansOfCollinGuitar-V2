import { Component, OnInit } from '@angular/core';
import {FileAsSourceForJsonService} from "../../services/file-as-source-for-json.service";
import {IFooterConfig} from "./FooterConfig";
import {Observable} from "rxjs/internal/Observable";
import {HttpResponse} from "@angular/common/http";


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
  private observe : Observable<HttpResponse<IFooterConfig[]>> ;
  constructor( private _service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    this.observe = this._service.getFooterSetUp();
    // this.observe
    //   .subscribe(data  => this.data = data ,
    //     error => this.errorMessage = <any>error);
    this.observe.forEach( ( dat: HttpResponse<IFooterConfig[]> ) => {
      this.data = dat.body ;
      console.log(dat);
    });
    this.touchStone = null ;
    console.log("FooterComponent is HERE");
  }
  ngOnInit0() {
    this.observe = this._service.getFooterSetUp() ;
    this.touchStone = this.data[0] ;
    console.log("FooterComponent is HERE");
  }

}

