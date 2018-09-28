package com.category.fans.controller

import com.category.fans.service.YouTubeClientService
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@Slf4j
@RestController
@RequestMapping("/fans/video")
class PerformanceVideoController implements CrossOriginContract {
    @Override
    String[] getRoutesNeededForCrossOriginRegistry() {
        [ "/fans/video/playListsByChannel" , "/fans/video/videosByPlaylist" , "/fans/video/videosByPlaylist/all" ]
    }
    @Autowired
    private @Qualifier("youTubeClient")
    YouTubeClientService service

    @GetMapping("playListsByChannel")
    protected def getPlayListsByChannel() {
        final def playListsByChannel = service.parseContentFromPlaylistsByChannel()
        playListsByChannel
    }
    @GetMapping("videosByPlaylist/all")
    protected def getVideosByPlaylist() {
        final def all = service.walkEntireChannelByPlaylistByAllMemberPlayListVideos()
    }

    @GetMapping("videosByPlaylist")
    protected def getVideosByPlaylist(@RequestParam Map<String, String> allRequestParams) {
        final def playListId = allRequestParams.get("playListId")
        final def jsonStream = service.getContentVideosByPlaylistId(playListId)
        final def videos = service.parseContentFromVideosByPlayList(jsonStream)
        videos
    }
}
