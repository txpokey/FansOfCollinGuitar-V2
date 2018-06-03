import {Component, OnInit} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {IHeaderConfig} from "../header/HeaderConfig";
import {Observable} from "rxjs/internal/Observable";
import {FileAsSourceForJsonService} from "../../services/file-as-source-for-json/file-as-source-for-json.service";

const carouselSlideDeck = [0, 1, 2];

@Component({
  selector: 'guitar-header',
  templateUrl: './header.component.html',
  providers: [FileAsSourceForJsonService],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private observe: Observable<HttpResponse<IHeaderConfig>>;
  // private observeMock: IHeaderConfig;
  public carouselSlideDeck: number[] = carouselSlideDeck ;
  public targets;
  public title;

  constructor( private service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    this.observe = this.service.getHeaderSetUp();
    // this.targets = this.observeMock.targets;
    // this.title = this.observeMock.title;
    this.observe.forEach((dat: HttpResponse<IHeaderConfig>) => {
      this.targets = dat.body.targets;
      this.title = dat.body.title;
    }) ;

    // console.log(this.observeMock);
    // console.log(this.observe);
    console.log("carouselSlideDeck:header.onInit> " + carouselSlideDeck);
    console.log("FooterComponent is HERE");
  }
}
