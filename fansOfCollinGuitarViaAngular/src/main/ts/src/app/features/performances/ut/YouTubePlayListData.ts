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

