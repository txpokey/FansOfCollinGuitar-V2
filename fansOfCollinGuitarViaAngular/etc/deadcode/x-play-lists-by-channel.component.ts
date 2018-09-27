import { Component, OnInit } from '@angular/core';
import {FileAsSourceForJsonService} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IYouTubeChannelQueryResponse, IYouTubeChannelQueryResponseDetails} from "../x-YouTubePlayListData";

@Component({
  selector: 'ut-play-list-by-channel',
  templateUrl: './play-lists-by-channel.component.html',
  styleUrls: ['./play-lists-by-channel.component.css']
})
export class PlayListsByChannelComponent implements OnInit {

  constructor(private service: FileAsSourceForJsonService, private modalService: NgbModal) {}

  channelQueryResponse: IYouTubeChannelQueryResponse = null ;
  channelQueryResponseSorted: IYouTubeChannelQueryResponse = null ;
  guitarPlaylist: IYouTubeChannelQueryResponseDetails = null ;

  ngOnInit() {
    let foo: IYouTubeChannelQueryResponse = this.service.getPerformancesByYearBySemester() ;
    this.channelQueryResponse = foo ;
    let sortedClone: IYouTubeChannelQueryResponse = new MySortedClone(foo) ;
    this.channelQueryResponseSorted = sortedClone ;
  }
  openBackDropCustomClass(guitarPlaylist,content) {
    this.guitarPlaylist = guitarPlaylist ;
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
}
class MySortedClone implements IYouTubeChannelQueryResponse {
  channelTitle: string;
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  items: IYouTubeChannelQueryResponseDetails[];
  constructor( clonee : IYouTubeChannelQueryResponse ) {
    this.channelTitle = clonee.channelTitle ;
    this.kind = clonee.kind ;
    this.etag = clonee.etag ;
    this.pageInfo = clonee.pageInfo ;
    this.items = this.sortPlaylistGroupBy(clonee.items) ;
  }
  private sortPlaylistGroupBy(clonee: IYouTubeChannelQueryResponseDetails[]) : IYouTubeChannelQueryResponseDetails[] {
    let candidate: IYouTubeChannelQueryResponseDetails[] = [] ;
    clonee.forEach( member => candidate.push(member)) ;
    let sortedArray = Array.from(candidate).sort( (x,y) => { return -(x.snippet.title.localeCompare(y.snippet.title))}  );
    return sortedArray;
  }
}

