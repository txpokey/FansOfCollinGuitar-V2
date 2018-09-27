import {Component, Input, OnInit} from '@angular/core';

import {FileAsSourceForJsonService} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {isUndefined} from "util";
import {
    IYouTubeChannelQueryResponseDetails,
    IYouTubePlaylist,
    IYouTubePlayListItem, IYouTubePlayListItemSnippet
} from "../YouTubePlayListClientServiceContracts";


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
    let bar = this.sortPlaylistGroupBy() ;
    this.playlistGroupBy = bar ;
  }
  private sortPlaylistGroupBy() : Map<string,Set<IYouTubePlayListItem>> {
    let candidate: Map<string,Set<IYouTubePlayListItem>> = new Map() ;
    let playlistGroupBy: Map<string,Set<IYouTubePlayListItem>> =  this.playlistGroupBy;
    let allGroupByKeysIterator: Iterator<string> = playlistGroupBy.keys();
    let allGroupByKeysAsArray = Array.from( playlistGroupBy.keys() ) ;
    for( let key of allGroupByKeysAsArray ) {
      let setDiscovered = playlistGroupBy.get(key) ;
      let sortedArray = Array.from(setDiscovered).sort( (x,y) => { return x.snippet.title.localeCompare(y.snippet.title)}  );
      let sortedSet = new Set( sortedArray ) ;
      candidate.set(key,sortedSet) ;
    }
    return candidate;
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
