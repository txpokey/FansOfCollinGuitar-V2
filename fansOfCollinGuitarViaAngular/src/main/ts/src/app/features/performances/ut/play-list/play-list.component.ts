import {Component, Input, OnInit} from '@angular/core';

import {
    FileAsSourceForJsonService, GuitarApiComponentBaseClass, GuitarApiObserver, GuitarApiObserverContract,
    GuitarApiObserverPollingContract
} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {isUndefined} from "util";
import {
    IYouTubePlaylist,
    IYouTubePlayListItem,
    IYouTubePlayListItemSnippet
} from "../constants/2018/spring/YouTubePlaylistQuery";
import {
    IYouTubePlaylistsByChannelQueryResponse,
    IYouTubeVideosByPlaylistQueryResponse
} from "../YouTubePlayListClientServiceContracts";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";

// ------
const playListsUri = "http://localhost:8080/fans/video/videosByPlaylist";
const EMPTY_URL = '#0';
const setupUri = playListsUri;

@Component({
    selector: 'ut-play-list',
    templateUrl: './play-list.component.html',
    styleUrls: ['./play-list.component.css']
})
export class PlayListComponent extends GuitarApiComponentBaseClass<IYouTubeVideosByPlaylistQueryResponse[]> implements GuitarApiObserverPollingContract {
    @Input() requestedPlaylist: IYouTubePlaylistsByChannelQueryResponse;

    playlistQuery: IYouTubeVideosByPlaylistQueryResponse[] = null;
    // playlistGroupBy: Map<string, Set<IYouTubeVideosByPlaylistQueryResponse>> = null;
    guitarPlaylist: IYouTubeVideosByPlaylistQueryResponse[] = null;

    constructor(private service: FileAsSourceForJsonService, private modalService: NgbModal) {
        super(setupUri, service.getHttpClient());
        // console.log("playListConstructor:requestedPlayList:> " + this.requestedPlaylist) ;
    }
    ngOnInit() {
        let clientStub  : HttpClient = super.getHttpClient() ;
        let specialUrl = setupUri + "?playListId=" + this.requestedPlaylist.playListId;
        let agent : GuitarApiObserverContract  = new GuitarApiObserver<IYouTubeVideosByPlaylistQueryResponse[]>(specialUrl , clientStub ) ;
        super.setNetworker(agent) ;
        let spun:  boolean = agent.spinUp() ;
        console.log("ngOnInit: spinup is HERE:uri> " + specialUrl + "\nspinup is HERE:spun> " + spun );
    }
    isPlayListReady() : boolean {
        return this.isReady();
    }
    isReady(): boolean {
        let ret: boolean = false;
        if (this.getNetworker().isReady()) {
            let candidate: any = this.getNetworker().getPayload();
            this.playlistQuery = candidate;
            // this.playlistGroupBy = PlayListsComponentUtil.computePlaylistGroupBy(candidate);
            this.guitarPlaylist = PlayListsComponentUtil.sortPlaylistDiscovered(candidate);
            ret = true;
        }
        return ret;
    }

    hasIcon = function (candidateLink) {
        return EMPTY_URL !== candidateLink.icon;
    };
    hasLogo = function (candidateLink) {
        return EMPTY_URL !== candidateLink.logo;
    };

    openBackDropCustomClass(guitarPlaylist, content) {
        this.guitarPlaylist = guitarPlaylist;
        this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }
}

class PlayListsComponentUtil {
    static computePlaylistGroupBy(allPlaylistsInChannel: IYouTubeVideosByPlaylistQueryResponse[]): Map<string, Set<IYouTubeVideosByPlaylistQueryResponse>> {

        let candidate: Map<string, Set<IYouTubeVideosByPlaylistQueryResponse>> = new Map();
        for (let playlist of allPlaylistsInChannel) {
                let playlistItemPlaylistId = playlist.playListId;
                let setDiscovered = candidate.get(playlistItemPlaylistId);
                let sideEffectOfAddingPlaylistMemberVideo = isUndefined(setDiscovered) ? (setDiscovered = new Set().add(playlist)) : setDiscovered.add(playlist);
                candidate.set(playlistItemPlaylistId, setDiscovered);
            // }
            // console.log(playlist) ;
        }
        return candidate;
    }

    static sortPlaylistDiscovered(clonee: IYouTubeVideosByPlaylistQueryResponse[]): IYouTubeVideosByPlaylistQueryResponse[] {
        let candidate: IYouTubeVideosByPlaylistQueryResponse[] = [];
        clonee.forEach(
            (member: IYouTubeVideosByPlaylistQueryResponse) => {
                // if (!member.videoTitle.match(/websiteHelp/)) {
                //     candidate.push(member)
                // }
                candidate.push(member)
            }
        );
        let sortedArray = Array.from(candidate).sort((x, y) => {
            return -(x.videoTitle.localeCompare(y.videoTitle))
        });
        console.log("IYouTubeVideosByPlaylistQueryResponse:sortedArray>" + sortedArray);
        return candidate ;
    }
}

//-------
// @Component({
//   selector: 'ut-play-list',
//   templateUrl: './play-list.component.html',
//   styleUrls: ['./play-list.component.css']
// })
// export class PlayListComponent implements OnInit {
//
//   constructor(private service: FileAsSourceForJsonService) {}
//   @Input() requestedPlaylist: IYouTubeVideosByPlaylistQueryResponse ;
//   playlistQuery : IYouTubePlaylist[] = null ;
//   playlistGroupBy : Map<string,Set<IYouTubePlayListItem>> = null ;
//
//   ngOnInit() {
//     let fbar = this.service.getPerformancesPlaylists() ;
//     this.playlistQuery = fbar ;
//     let foo = this.computePlaylistGroupBy() ;
//     this.playlistGroupBy = foo ;
//     let bar = this.sortPlaylistGroupBy() ;
//     this.playlistGroupBy = bar ;
//   }
//   private sortPlaylistGroupBy() : Map<string,Set<IYouTubePlayListItem>> {
//     let candidate: Map<string,Set<IYouTubePlayListItem>> = new Map() ;
//     let playlistGroupBy: Map<string,Set<IYouTubePlayListItem>> =  this.playlistGroupBy;
//     let allGroupByKeysIterator: Iterator<string> = playlistGroupBy.keys();
//     let allGroupByKeysAsArray = Array.from( playlistGroupBy.keys() ) ;
//     for( let key of allGroupByKeysAsArray ) {
//       let setDiscovered = playlistGroupBy.get(key) ;
//       let sortedArray = Array.from(setDiscovered).sort( (x,y) => { return x.snippet.title.localeCompare(y.snippet.title)}  );
//       let sortedSet = new Set( sortedArray ) ;
//       candidate.set(key,sortedSet) ;
//     }
//     return candidate;
//   }
//
//   private computePlaylistGroupBy() : Map<string,Set<IYouTubePlayListItem>> {
//
//     let candidate : Map<string,Set<IYouTubePlayListItem>> = new Map() ;
//     let allPlaylistsInChannel: IYouTubePlaylist[] = this.playlistQuery ;
//     for( let playlist of allPlaylistsInChannel ) {
//       let itemsArray : IYouTubePlayListItem[] = playlist.items ;
//       for ( let playlistItem of itemsArray ) {
//         let snippet : IYouTubePlayListItemSnippet = playlistItem.snippet ;
//         let playlistItemPlaylistId = snippet.playlistId ;
//         let setDiscovered = candidate.get( playlistItemPlaylistId );
//         let sideEffectOfAddingPlaylistMemberVideo = isUndefined(setDiscovered) ? (setDiscovered = new Set().add(playlistItem)) : setDiscovered.add(playlistItem) ;
//         candidate.set( playlistItemPlaylistId ,setDiscovered ) ;
//         // console.log(playlist) ;
//       }
//       // console.log(playlist) ;
//     }
//     return candidate ;
//   }
//
// }
