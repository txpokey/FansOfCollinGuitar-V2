package com.category.fans.service.youtube

import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.testng.annotations.Test

@Slf4j
@Test
@SpringBootTest
//@ContextConfiguration( classes = [YamlConfig.class])
class PlayListByChannelTest extends AbstractTestNGSpringContextTests {
    final def wannaDo = "https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCYkk_DU_k1sWyOw_fy6Raug&maxResults=25&key=AIzaSyDPC61pNwGSNWeBFZFnuxMJ1ksH3uR_qG8"

    @Value('${google.apikey:NOT_FOUND}')
    String apikey

    void sanityCheck() {
        assert apikey
        log.debug(apikey)
    }
}
