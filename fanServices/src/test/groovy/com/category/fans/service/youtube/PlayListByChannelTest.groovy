package com.category.fans.service.youtube

import com.category.fans.service.YouTubeClientService
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.testng.annotations.Test

@Slf4j
@Test
@SpringBootTest
class PlayListByChannelTest extends AbstractTestNGSpringContextTests{
    private final def testId = "PLvhkK1827NDxXl2sq-N7uNLpQxb2S01CC"

    @Value('${google.apikey:NOT_FOUND}')
    String apikey

    @Autowired
    private @Qualifier("youTubeClient")
    YouTubeClientService service

    void sanityCheck() {
        assert service
        assert apikey
        assert apikey != "NOT_FOUND"
        log.debug(apikey)
    }

    void getContentPlaylistsByChannelTest() {
        def candidate = service.getContentPlaylistsByChannel()
        assert candidate
        log.debug("playLists query content:> \n${candidate}")
    }

    void getContentVideosByPlaylistIdTest() {
        def candidate = service.getContentVideosByPlaylistId(testId)
        assert candidate
        log.debug("playLists query content:> \n${candidate}")
    }

    void parseContentFromPlaylistsByChannelTest() {
        def jsonStream = service.getContentPlaylistsByChannel()
        def candidate = service.parseContentFromPlaylistsByChannel(jsonStream)
        assert candidate
    }

    void parseContentFromVideosByPlayListTest() {
        def jsonStream = service.getContentVideosByPlaylistId(testId)
        def candidate = service.parseContentFromVideosByPlayList(jsonStream)
        assert candidate
    }

// --------------------

    void walkEntireChannelByPlaylistByAllMemberPlayListVideosTest() {
        def jsonStream = service.getContentPlaylistsByChannel()
        def playLists = service.parseContentFromPlaylistsByChannel(jsonStream)
        def captured = []
        playLists.collect( captured , capturePlayListItemsClosure )
        captured
    }

    private def capturePlayListItemsClosure = { playListMap ->
        def playListId = playListMap.playListId
        def jsonStream = service.getContentVideosByPlaylistId(playListId)
        def videoMaps = service.parseContentFromVideosByPlayList(jsonStream)
        def captured = []
        videoMaps.collect( captured ) { videoMap ->
            def aggregatorMap = [:]
            aggregatorMap << playListMap
            aggregatorMap << videoMap
            aggregatorMap
        }
        captured
    }


}
