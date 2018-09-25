package com.category.fans.service.youtube

import com.category.fans.service.YouTubeClientService
import groovy.json.JsonSlurper
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.lang.NonNull
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
        def candidate = getContentPlaylistsByChannel()
        assert candidate
        log.debug("playLists query content:> \n${candidate}")
    }

    void getContentVideosByPlaylistIdTest() {
        def candidate = getContentVideosByPlaylistId(testId)
        assert candidate
        log.debug("playLists query content:> \n${candidate}")
    }

    void parseContentFromPlaylistsByChannelTest() {
        def jsonStream = getContentPlaylistsByChannel()
        def candidate = parseContentFromPlaylistsByChannel(jsonStream)
        assert candidate
    }

    void parseContentFromVideosByPlayListTest() {
        def jsonStream = getContentVideosByPlaylistId(testId)
        def candidate = parseContentFromVideosByPlayList(jsonStream)
        assert candidate
    }
// -----------------------------------
    private def getContentPlaylistsByChannel() {
        def candidate = service.getContentPlaylistsByChannel()
        candidate
    }
    private def parseContentFromPlaylistsByChannel(@NonNull def jsonStream) {
        parseContentFromJsonStreamUsingClosure(jsonStream, playListCaptureClosure)
    }

// -----------------------------------

    private def getContentVideosByPlaylistId(@NonNull def playListId){
        def candidate = service.getContentVideosByPlaylistId(playListId)
        candidate
    }
    private def parseContentFromVideosByPlayList(@NonNull def jsonStream) {
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
        def id = item.id
        def title = item.snippet.title
        def captured = [id: id, title: title]
        captured
    }

    final private def videoCaptureClosure = { item ->
        def id = item.contentDetails.videoId
        def title = item.snippet.title
        def description = item.snippet.description
        def captured = [id: id , title: title, description: description ]
        captured
    }



}
