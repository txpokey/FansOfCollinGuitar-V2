export interface IYouTubePlaylistsByChannelQueryResponse {
    // def captured = [channelTitle: channelTitle, playListId: playListId, playListTitle: title,
    // playListDescription: description, thumbnailUrl: thumbnailUrl]
    playListId: string,
    playListTitle: string,
    channelTitle: string,
    playListDescription: string
    thumbnailUrl: string
}export interface IYouTubeVideosByPlaylistQueryResponse extends IYouTubePlaylistsByChannelQueryResponse {
    // def captured = [playListId: playlistId, videoId: videoId, videoTitle: title, videoDescription: description]

    playListId: string,
    videoId: string,
    videoTitle: string,
    videoDescription: string
}

//
//
//
// def captured = [playListId: playlistId, videoId: videoId, videoTitle: title, videoDescription: description]
// def captured = [playListId: playListId, playListTitle: title, playListDescription: description]

export interface IYouTubePlaylist {
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: IYouTubePlayListItem[]
}

export interface IYouTubePlaylistHeader {
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
}
export interface IYouTubePlayListItemSnippet {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: any,
    channelTitle: string,
    playlistId: string,
    position: number,
    resourceId: {
        kind: string,
        videoId: string
    }
}

export interface IYouTubePlayListItem {
    kind: string,
    etag: string,
    id: string,
    snippet: IYouTubePlayListItemSnippet ,
    contentDetails: {
        videoId: string,
        videoPublishedAt: string
    }
}

export interface IYouTubeChannelQueryResponse {
    channelTitle: string,
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: IYouTubeChannelQueryResponseDetails[]
}
export interface IYouTubeChannelQueryResponseHeader {
    channelTitle: string,
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
}
export interface IYouTubeChannelQueryResponseDetails {
    kind: string,
    etag: string,
    id: string,
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: any,
        channelTitle: string,
        localized: {
            title: string,
            description: string
        }
    },
    contentDetails: {
        itemCount: number
    }
};


