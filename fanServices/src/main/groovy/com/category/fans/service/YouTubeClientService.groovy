package com.category.fans.service

import groovy.json.JsonSlurper
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Value
import org.springframework.lang.NonNull
import org.springframework.stereotype.Service

@Slf4j
@Service("youTubeClient")
class YouTubeClientService {
    private final def apibase = "https://www.googleapis.com/youtube/v3/"

    @Value('${google.apikey:NOT_FOUND}') // coming from crypto yml
    String apikey
    @Value('${google.channelId:NOT_FOUND}') // coming from crypto yml
    String channelId

    private final def MAX_RESULTS = "&maxResults=50"
    private final def PARTS_REQUESTED = "part=snippet%2CcontentDetails"

    def getContentPlaylistsByChannel() {
        final def apiPreImage = getYouTubeUrlForPlaylistsByChannelId(channelId)
        def apiURL = new URL(apiPreImage)
        def candidate = apiURL.getContent()
        candidate
    }

    def getContentVideosByPlaylistId( @NonNull def playListId ) {
        def apiPreImage = getYouTubeUrlForPlaylistItemByPlayListId( playListId )
        def apiURL = new URL(apiPreImage)
        def candidate = apiURL.getContent()
        candidate
    }
// --------------------------------------
    private def getYouTubeUrlForPlaylistsByChannelId(@NonNull def channelId ) {
        final def CHANNEL_ID = "channelId=${channelId}"
        final def apiPreImage = getYouTubeUrl( [apiUsed: "playlists", payloadId: CHANNEL_ID ])
        apiPreImage
    }
    private def getYouTubeUrlForPlaylistItemByPlayListId(@NonNull def playListId ) {
        final def PLAYLIST_PICKER = "playlistId=${playListId}"
        final def apiPreImage = getYouTubeUrl( [apiUsed: "playlistItems", payloadId: PLAYLIST_PICKER ])
        apiPreImage
    }
    private def getYouTubeUrl(@NonNull def map) {
        final def API_KEY = "key=${apikey}"
        final def apiUsed = apibase + "${map.apiUsed}?" + PARTS_REQUESTED + MAX_RESULTS
        final def apiPreImage = apiUsed + "&${map.payloadId}&${API_KEY}"
        apiPreImage
    }

// -----------------------------------

    def parseContentFromPlaylistsByChannel(@NonNull def jsonStream) {
        parseContentFromJsonStreamUsingClosure(jsonStream, playListCaptureClosure)
    }

// -----------------------------------
    def parseContentFromVideosByPlayList(@NonNull def jsonStream) {
        parseContentFromJsonStreamUsingClosure(jsonStream, videoCaptureClosure)
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
        def captured = [playListId: playListId, playListTitle: title, playListDescription: description]
        captured
    }

    final private def videoCaptureClosure = { item ->
        def playlistId = item.snippet.playlistId
        def videoId = item.contentDetails.videoId
        def title = item.snippet.title
        def description = item.snippet.description
        def captured = [playListId: playlistId, videoId: videoId , videoTitle: title, videoDescription: description ]
        captured
    }

}
