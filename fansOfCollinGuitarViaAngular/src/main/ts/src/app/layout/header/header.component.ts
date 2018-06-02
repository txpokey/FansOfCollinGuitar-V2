import {Component, OnInit} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {IHeaderConfig} from "../header/HeaderConfig";
import {Observable} from "rxjs/internal/Observable";
import {FileAsSourceForJsonService} from "../../services/file-as-source-for-json.service";

@Component({
  selector: 'guitar-header',
  templateUrl: './header.component.html',
  providers: [FileAsSourceForJsonService],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // private observe: Observable<HttpResponse<IHeaderConfig>>;
  private observe: IHeaderConfig;
  public carouselSlideDeck = [0, 1, 2];
  public targets;
  public title;

  constructor( private service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    this.observe = this.service.getHeaderSetUp();
    console.log(this.observe);
    this.targets = this.observe.targets;
    this.title = this.observe.title;

    // this.observe.forEach((dat: HttpResponse<IHeaderConfig>) => {
    //   console.log(dat);
    //   this.targets = dat.body.targets;
    //   this.title = dat.body.title;
    // });
    console.log("FooterComponent is HERE");
  }
}
