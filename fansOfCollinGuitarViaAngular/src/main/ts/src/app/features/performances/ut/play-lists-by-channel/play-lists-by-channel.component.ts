import { Component, OnInit } from '@angular/core';
import {FileAsSourceForJsonService} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {IYouTubeChannelQueryResponse, IYouTubeChannelQueryResponseDetails} from "../YouTubePlayListData";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ut-play-list-by-channel',
  templateUrl: './play-lists-by-channel.component.html',
  styleUrls: ['./play-lists-by-channel.component.css']
})
export class PlayListsByChannelComponent implements OnInit {

  constructor(private service: FileAsSourceForJsonService, private modalService: NgbModal) {}

  channelQueryResponse: IYouTubeChannelQueryResponse = null ;
  guitarPlaylist: IYouTubeChannelQueryResponseDetails = null ;

  ngOnInit() {
    let foo: IYouTubeChannelQueryResponse = this.service.getPerformancesByYearBySemester() ;
    this.channelQueryResponse = foo ;
  }
  openBackDropCustomClass(guitarPlaylist,content) {
    this.guitarPlaylist = guitarPlaylist ;
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
}
