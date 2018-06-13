import {Component, Input, OnInit} from '@angular/core';
import {IYouTubeChannelQueryResponseDetails} from "../YouTubePlayListData";

@Component({
  selector: 'ut-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  constructor() { }

  @Input() requestedPlaylist: IYouTubeChannelQueryResponseDetails ;
  ngOnInit() {
  }

}
