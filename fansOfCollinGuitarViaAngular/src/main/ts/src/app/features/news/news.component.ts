import { Component, OnInit } from '@angular/core';
import {TabStateComponent} from "../../services/tab-state/tab-state.component";
import {IGuitarNewsConfig} from "./GuitarNewsConfig";
import {FileAsSourceForJsonService} from "../../services/file-as-source-for-json.service";

@Component({
  selector: 'guitar-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public guitarProgramNews: IGuitarNewsConfig;

  constructor(public tabStates: TabStateComponent, private service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    this.guitarProgramNews = this.service.getNewsFeed() ;
    console.log("newsComponent is HERE");
  }

}
