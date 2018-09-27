import {Component, OnInit} from '@angular/core';
import {
    FileAsSourceForJsonService, GuitarApiComponentBaseClass,
    GuitarApiObserverPollingContract
} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {
    IYouTubePlaylistsByChannelQueryResponse, IYouTubeVideosByPlaylistQueryResponse
} from "../YouTubePlayListClientServiceContracts";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

const playListsByChannelUri  = "http://localhost:8080/fans/video/playListsByChannel" ;
const EMPTY_URL = '#0' ;
const setupUri  = playListsByChannelUri ;
@Component({
    selector: 'ut-play-list-by-channel',
    templateUrl: './play-lists-by-channel.component.html',
    styleUrls: ['./play-lists-by-channel.component.css']
})
export class PlayListsByChannelComponent extends GuitarApiComponentBaseClass<IYouTubePlaylistsByChannelQueryResponse[]> implements GuitarApiObserverPollingContract {
    channelQueryResponse: IYouTubePlaylistsByChannelQueryResponse[] = null;
    channelQueryResponseSorted: IYouTubePlaylistsByChannelQueryResponse[] = null;
    guitarPlaylist: IYouTubeVideosByPlaylistQueryResponse[] = null ;

    constructor( private service: FileAsSourceForJsonService , private modalService: NgbModal) { super( setupUri , service.getHttpClient() ) ;}

    isReady() : boolean {
        let ret : boolean = false ;
        if(this.getNetworker().isReady() ) {
            let candidate : any = this.getNetworker().getPayload() ;
            this.channelQueryResponse = candidate;
            this.channelQueryResponseSorted = PlayListsByChannelComponentUtil.sortPlaylistGroupBy(candidate);
            ret = true ;
        }
        return ret ;
    }
    hasIcon = function(candidateLink) {
        return  EMPTY_URL !== candidateLink.icon ;
    };
    hasLogo = function(candidateLink) {
        return  EMPTY_URL !== candidateLink.logo ;
    };
    openBackDropCustomClass(guitarPlaylist, content) {
        this.guitarPlaylist = guitarPlaylist;
        this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }
}
// export class PlayListsByChannelComponent extends GuitarApiComponentBaseClass<IYouTubePlaylistsByChannelQueryResponse[]> implements GuitarApiObserverPollingContract {
//     // playListsByChannelUri
//     constructor(private service: FileAsSourceForJsonService, private modalService: NgbModal) {
//     }
//
//     channelQueryResponse: IYouTubePlaylistsByChannelQueryResponse[] = null;
//     channelQueryResponseSorted: IYouTubePlaylistsByChannelQueryResponse[] = null;
//     guitarPlaylist: IYouTubeVideosByPlaylistQueryResponse[] = null ;
//
//     ngOnInit() {  // TODO: IYouTubePlaylistsByChannelQueryResponse
//         let queryResponse: IYouTubePlaylistsByChannelQueryResponse[] =  this.service.getPerformancesByYearBySemester();
//         this.channelQueryResponse = queryResponse;
//         let candidate: IYouTubePlaylistsByChannelQueryResponse[] = [];
//         queryResponse.forEach( (member:any) => candidate.push(new MySortedClone(member)));
//         let sortedClone: IYouTubePlaylistsByChannelQueryResponse[] = MySortedClone.sortPlaylistGroupBy(candidate);
//         this.channelQueryResponseSorted = sortedClone;
//     }
//
//     openBackDropCustomClass(guitarPlaylist, content) {
//         this.guitarPlaylist = guitarPlaylist;
//         this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
//     }
// }

// class MySortedClone implements IYouTubePlaylistsByChannelQueryResponse {
//     playListId: string;
//     playListTitle: string;
//     playListDescription: string;
//
//     constructor(clonee: IYouTubePlaylistsByChannelQueryResponse) {
//         this.playListId = clonee.playListId;
//         this.playListTitle = clonee.playListTitle;
//         this.playListDescription = clonee.playListDescription;
//     }
//
//     static sortPlaylistGroupBy(clonee: IYouTubePlaylistsByChannelQueryResponse[]): IYouTubePlaylistsByChannelQueryResponse[] {
//         let candidate: IYouTubePlaylistsByChannelQueryResponse[] = [];
//         clonee.forEach(member => candidate.push(member));
//         let sortedArray = Array.from(candidate).sort((x, y) => {
//             return -(x.playListTitle.localeCompare(y.playListTitle))
//         });
//         return sortedArray;
//     }
// }

class PlayListsByChannelComponentUtil {
    static sortPlaylistGroupBy(clonee: IYouTubePlaylistsByChannelQueryResponse[]): IYouTubePlaylistsByChannelQueryResponse[] {
        let candidate: IYouTubePlaylistsByChannelQueryResponse[] = [];
        clonee.forEach(
(member:IYouTubePlaylistsByChannelQueryResponse) => {
                if ( ! member.playListTitle.match(/websiteHelp/ ) ) {
                    candidate.push(member)
                }
            }
        );
        let sortedArray = Array.from(candidate).sort((x, y) => {
            return -(x.playListTitle.localeCompare(y.playListTitle))
        });
        console.log("playListsByChannelUtil:sortedArray>" + sortedArray) ;
        return sortedArray;
    }
}


