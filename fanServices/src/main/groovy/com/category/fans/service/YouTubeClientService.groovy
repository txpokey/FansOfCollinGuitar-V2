package com.category.fans.service

import groovy.json.JsonSlurper
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Value
import org.springframework.lang.NonNull
import org.springframework.stereotype.Service

@Slf4j
@Service("youTubeClient")
class YouTubeClientService{
    private final def apibase = "https://www.googleapis.com/youtube/v3/"

    @Value('${google.apikey:NOT_FOUND}')
    // coming from crypto yml
    String apikey
    @Value('${google.channelId:NOT_FOUND}')
    // coming from crypto yml
    String channelId

    private final def MAX_RESULTS = "&maxResults=50"
    private final def PARTS_REQUESTED = "part=snippet%2CcontentDetails"

    def getContentPlaylistsByChannel() {
        final def apiPreImage = getYouTubeUrlForPlaylistsByChannelId(channelId)
        def apiURL = new URL(apiPreImage)
        def candidate = apiURL.getContent()
        candidate
    }

    def getContentVideosByPlaylistId(@NonNull def playListId) {
        def apiPreImage = getYouTubeUrlForPlaylistItemByPlayListId(playListId)
        def apiURL = new URL(apiPreImage)
        def candidate = apiURL.getContent()
        candidate
    }
    def parseContentFromPlaylistsByChannel() {
        def jsonStream = getContentPlaylistsByChannel()
        def candidate = parseContentFromPlaylistsByChannel(jsonStream)
        assert candidate
        candidate
    }
    def parseContentFromPlaylistsByChannel(@NonNull def jsonStream) {
        parseContentFromJsonStreamUsingClosure(jsonStream, playListCaptureClosure)
    }

    def parseContentFromVideosByPlayList(@NonNull def jsonStream) {
        parseContentFromJsonStreamUsingClosure(jsonStream, videoCaptureClosure)
    }

    def walkEntireChannelByPlaylistByAllMemberPlayListVideos() {
        def jsonStream = getContentPlaylistsByChannel()
        def playLists = parseContentFromPlaylistsByChannel(jsonStream)
        def captured = []
        playLists.collect(captured, capturePlayListItemsClosure)
        captured
    }
// --------------------------------------
    private def getYouTubeUrlForPlaylistsByChannelId(@NonNull def channelId) {
        final def CHANNEL_ID = "channelId=${channelId}"
        final def apiPreImage = getYouTubeUrl([apiUsed: "playlists", payloadId: CHANNEL_ID])
        apiPreImage
    }

    private def getYouTubeUrlForPlaylistItemByPlayListId(@NonNull def playListId) {
        final def PLAYLIST_PICKER = "playlistId=${playListId}"
        final def apiPreImage = getYouTubeUrl([apiUsed: "playlistItems", payloadId: PLAYLIST_PICKER])
        apiPreImage
    }

    private def getYouTubeUrl(@NonNull def map) {
        final def API_KEY = "key=${apikey}"
        final def apiUsed = apibase + "${map.apiUsed}?" + PARTS_REQUESTED + MAX_RESULTS
        final def apiPreImage = apiUsed + "&${map.payloadId}&${API_KEY}"
        apiPreImage
    }

// -----------------------------------

    private parseContentFromJsonStreamUsingClosure(@NonNull def jsonStream, @NonNull def processingClosure) {
        final def jsonSlurper = new JsonSlurper()
        def candidate = jsonSlurper.parse(jsonStream)
        def itemsList = candidate?.items
        def captured = []
        itemsList.collect(captured, processingClosure)
        captured
    }

    final private def playListCaptureClosure = { item ->
        def playListId = item.id
        def title = item.snippet.title
        def description = item.snippet.description
        def channelTitle = item.snippet.channelTitle
        def thumbnailUrl = item.snippet.thumbnails.medium.url
        def captured = [channelTitle: channelTitle, playListId: playListId, playListTitle: title,
                        playListDescription: description, thumbnailUrl: thumbnailUrl]
        captured
    }

    final private def videoCaptureClosure = { item ->
        def playlistId = item.snippet.playlistId
        def videoId = item.contentDetails.videoId
        def title = item.snippet.title
        def description = item.snippet.description
        def captured = [playListId: playlistId, videoId: videoId, videoTitle: title, videoDescription: description]
        captured
    }

    private def capturePlayListItemsClosure = { playListMap ->
        def playListId = playListMap.playListId
        def jsonStream = getContentVideosByPlaylistId(playListId)
        def videoMaps = parseContentFromVideosByPlayList(jsonStream)
        def captured = []
        videoMaps.collect(captured) { videoMap ->
            def aggregatorMap = [:]
            aggregatorMap << playListMap
            aggregatorMap << videoMap
            aggregatorMap
        }
        captured
    }
}
