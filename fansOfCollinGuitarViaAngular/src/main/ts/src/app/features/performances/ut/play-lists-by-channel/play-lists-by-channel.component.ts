import { Component, OnInit } from '@angular/core';
import {FileAsSourceForJsonService} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {IYouTubeChannelQueryResponse} from "../YouTubePlayListData";

@Component({
  selector: 'ut-play-list-by-channel',
  templateUrl: './play-lists-by-channel.component.html',
  styleUrls: ['./play-lists-by-channel.component.css']
})
export class PlayListsByChannelComponent implements OnInit {

  constructor(private service: FileAsSourceForJsonService) {}

  channelQueryResponse: IYouTubeChannelQueryResponse = null ;

  ngOnInit() {
    let foo: IYouTubeChannelQueryResponse = this.service.getPerformancesByYearBySemester() ;
    this.channelQueryResponse = foo ;
  }

}
