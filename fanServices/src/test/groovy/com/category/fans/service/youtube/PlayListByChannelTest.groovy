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
//@ContextConfiguration( classes = [YamlConfig.class])
class PlayListByChannelTest extends AbstractTestNGSpringContextTests {

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

    void getContentFromPlaylistsTest(){
        def candidate = getContentFromPlaylists()
        assert candidate
        log.debug("playLists query content:> \n${candidate}")
    }
    private def getContentFromPlaylists(){
        def candidate = service.getContentFromPlaylists()
    }
    void parseContentFromPlaylistsTest() {
        def jsonStream = getContentFromPlaylists()
        def candidate = parseContentFromPlaylists(jsonStream)
        assert candidate

    }

    private def parseContentFromPlaylists(@NonNull def jsonStream) {
        final def jsonSlurper = new JsonSlurper()
        def candidate = jsonSlurper.parse(jsonStream)
        def itemsList = candidate?.items
        def videos = []
        itemsList.each {
            item ->
                def id = item.id
                def title = item.snippet.title
                videos.add( [id: id , title: title])
            log.debug("")
        }
        videos
    }
}
