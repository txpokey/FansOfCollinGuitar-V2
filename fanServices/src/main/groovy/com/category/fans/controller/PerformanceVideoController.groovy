package com.category.fans.controller

import com.category.fans.service.YouTubeClientService
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@Slf4j
@RestController
@RequestMapping("/fans/video")
class PerformanceVideoController implements CrossOriginContract {
    @Override
    String[] getRoutesNeededForCrossOriginRegistry() {
        [ "/fans/video/playListsByChannel" , "/fans/video/videosByPlaylist" ]
    }
    @Autowired
    private @Qualifier("youTubeClient")
    YouTubeClientService service

    @GetMapping("playListsByChannel")
    protected def getPlayListsByChannel() {
        final def playListsByChannel = service.parseContentFromPlaylistsByChannel()
        playListsByChannel
    }
    @GetMapping("videosByPlaylist")
    protected def getVideosByPlaylist() {
        final def header = service.walkEntireChannelByPlaylistByAllMemberPlayListVideos()
    }
}
