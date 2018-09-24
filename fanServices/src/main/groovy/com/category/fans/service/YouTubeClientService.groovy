package com.category.fans.service

import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

import javax.annotation.PostConstruct

@Slf4j
@Service("youTubeClient")
class YouTubeClientService {

    @Value('${google.apikey:NOT_FOUND}')
    String apikey

    private URL playLists

    @PostConstruct
    private void postConstructorWork() {
        def candidateUrl = "https://www.googleapis" +
                ".com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCYkk_DU_k1sWyOw_fy6Raug" +
                "&maxResults=50" +
                "&key=${apikey}"
        playLists = new URL(candidateUrl)
    }

    def getContentFromPlaylists() {
        def candidate = playLists.getContent()
        candidate
    }

//    @Bean("youTubeClient")
}
