
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
    thumbnails: any
      // thumbnails: {
      // default: {
      //   url: string,
      //   width: number,
      //   height: number
      // },
      // medium: {
      //   url: string,
      //   width: number,
      //   height: number
      // },
      // high: {
      //   url: string,
      //   width: number,
      //   height: number
      // },
      // standard: {
      //   url: string,
      //   width: number,
      //   height: number
      // },
      // maxres: {
      //   url: string,
      //   width: number,
      //   height: number
      // }
    ,
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

