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
    videoThumbnailUrl: string

}



