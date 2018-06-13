import {Component, Input, OnInit} from '@angular/core';
import {
  IYouTubeChannelQueryResponseDetails,
  IYouTubePlaylist,
  IYouTubePlayListItem,
  IYouTubePlayListItemSnippet
} from "../YouTubePlayListData";
import {FileAsSourceForJsonService} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {isUndefined} from "util";

@Component({
  selector: 'ut-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  constructor(private service: FileAsSourceForJsonService) {}
  @Input() requestedPlaylist: IYouTubeChannelQueryResponseDetails ;
  playlistQuery : IYouTubePlaylist[] = null ;
  playlistGroupBy : Map<string,Set<IYouTubePlayListItem>> = null ;

  ngOnInit() {
    let fbar = this.service.getPerformancesPlaylists() ;
    this.playlistQuery = fbar ;
    let foo = this.computePlaylistGroupBy() ;
    this.playlistGroupBy = foo ;
  }

  private computePlaylistGroupBy() : Map<string,Set<IYouTubePlayListItem>> {

    let candidate : Map<string,Set<IYouTubePlayListItem>> = new Map() ;
    let allPlaylistsInChannel: IYouTubePlaylist[] = this.playlistQuery ;
    for( let playlist of allPlaylistsInChannel ) {
      let itemsArray : IYouTubePlayListItem[] = playlist.items ;
      for ( let playlistItem of itemsArray ) {
        let snippet : IYouTubePlayListItemSnippet = playlistItem.snippet ;
        let playlistItemPlaylistId = snippet.playlistId ;
        let setDiscovered = candidate.get( playlistItemPlaylistId );
        let sideEffectOfAddingPlaylistMemberVideo = isUndefined(setDiscovered) ? (setDiscovered = new Set().add(playlistItem)) : setDiscovered.add(playlistItem) ;
        candidate.set( playlistItemPlaylistId ,setDiscovered ) ;
        // console.log(playlist) ;
      }
      // console.log(playlist) ;
    }
    return candidate ;
  }

}
