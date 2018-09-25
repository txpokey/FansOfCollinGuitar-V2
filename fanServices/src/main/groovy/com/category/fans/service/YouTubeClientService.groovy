package com.category.fans.service

import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Value
import org.springframework.lang.NonNull
import org.springframework.stereotype.Service

import javax.annotation.PostConstruct

@Slf4j
@Service("youTubeClient")
class YouTubeClientService {

    @Value('${google.apikey:NOT_FOUND}')
    String apikey
    @Value('${google.channelId:NOT_FOUND}')
    String channelId

    private URL playLists
    private URL playListsItems

//    private def Map<String,String> META_DATA = [:]
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
        final def apibase = "https://www.googleapis.com/youtube/v3/"
        final def apiUsed = apibase + "${map.apiUsed}?" + PARTS_REQUESTED + MAX_RESULTS
        final def apiPreImage = apiUsed + "&${map.payloadId}&${API_KEY}"
        apiPreImage
    }
}
