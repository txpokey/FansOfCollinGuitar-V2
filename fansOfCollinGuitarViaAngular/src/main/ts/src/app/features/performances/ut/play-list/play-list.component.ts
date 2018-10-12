import {Component, Input} from '@angular/core';

import {
    FileAsSourceForJsonService,
    GuitarApiComponentBaseClass,
    GuitarApiObserver,
    GuitarApiObserverContract,
    GuitarApiObserverPollingContract
} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {
    IYouTubePlaylistsByChannelQueryResponse,
    IYouTubeVideosByPlaylistQueryResponse
} from "../YouTubePlayListClientServiceContracts";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {ConstantsContract} from "../../../../services/constants/ConstantsContract";
import SpringbootBaseUrl = ConstantsContract.SpringbootBaseUrl;

// ------
const playListsByChannelUri = "/fans/video/videosByPlaylist";
const EMPTY_URL = '#0';
const setupUri = SpringbootBaseUrl + playListsByChannelUri;

@Component({
    selector: 'ut-play-list',
    templateUrl: './play-list.component.html',
    styleUrls: ['./play-list.component.css']
})
export class PlayListComponent extends GuitarApiComponentBaseClass<IYouTubeVideosByPlaylistQueryResponse[]> implements GuitarApiObserverPollingContract {
    @Input() requestedPlaylist: IYouTubePlaylistsByChannelQueryResponse;

    playlistQuery: IYouTubeVideosByPlaylistQueryResponse[] = null;
    guitarPlaylist: IYouTubeVideosByPlaylistQueryResponse[] = null;

    constructor(private service: FileAsSourceForJsonService, private modalService: NgbModal) {
        super(setupUri, service.getHttpClient());
    }
    /**
     * requestedPlaylist is not in scope during constructor, so need to override ngOnInit() so that we can
     * pass in that variable as a GET parameter on the http clien request set up in the abstract base class
     */
    ngOnInit() {
        let clientStub  : HttpClient = super.getHttpClient() ;
        let specialUrl = setupUri + "?playListId=" + this.requestedPlaylist.playListId;
        let agent : GuitarApiObserverContract  = new GuitarApiObserver<IYouTubeVideosByPlaylistQueryResponse[]>(specialUrl , clientStub ) ;
        super.setNetworker(agent) ;
        let spun:  boolean = agent.spinUp() ;
        console.log("ngOnInit: spinup is HERE:uri> " + specialUrl + "\nspinup is HERE:spun> " + spun );
    }
    isReady(): boolean {
        let ret: boolean = false;
        if (this.getNetworker().isReady()) {
            let candidate: any = this.getNetworker().getPayload();
            this.playlistQuery = candidate;
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
    // static computePlaylistGroupBy(allPlaylistsInChannel: IYouTubeVideosByPlaylistQueryResponse[]): Map<string, Set<IYouTubeVideosByPlaylistQueryResponse>> {
    //
    //     let candidate: Map<string, Set<IYouTubeVideosByPlaylistQueryResponse>> = new Map();
    //     for (let playlist of allPlaylistsInChannel) {
    //             let playlistItemPlaylistId = playlist.playListId;
    //             let setDiscovered = candidate.get(playlistItemPlaylistId);
    //             let sideEffectOfAddingPlaylistMemberVideo = isUndefined(setDiscovered) ? (setDiscovered = new Set().add(playlist)) : setDiscovered.add(playlist);
    //             candidate.set(playlistItemPlaylistId, setDiscovered);
    //         // }
    //         // console.log(playlist) ;
    //     }
    //     return candidate;
    // }

    static sortPlaylistDiscovered(clonee: IYouTubeVideosByPlaylistQueryResponse[]): IYouTubeVideosByPlaylistQueryResponse[] {
        let candidate: IYouTubeVideosByPlaylistQueryResponse[] = [];
        clonee.forEach(
            (member: IYouTubeVideosByPlaylistQueryResponse) => {
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
