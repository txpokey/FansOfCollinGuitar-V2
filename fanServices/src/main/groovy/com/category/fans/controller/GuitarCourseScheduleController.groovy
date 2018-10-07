package com.category.fans.controller

import com.category.fans.service.GuitarCourseScheduleContentService
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@Slf4j
//@RestController("guitarCourseScheduleController")
@RestController
@RequestMapping("/fans/classes")
class GuitarCourseScheduleController implements CrossOriginContract {
    @Override
    String[] getRoutesNeededForCrossOriginRegistry() {
        [ "/fans/video/guitarCourseSchedule/content" ]
    }
    @Autowired
    private @Qualifier("guitarCourseScheduleService")
    GuitarCourseScheduleContentService service

    @GetMapping("all")
    protected def getScheduleByYearByTermByCourseByTitle() {
        final def scheduleByYearByTermByCourseByTitle = service.getContent()
        scheduleByYearByTermByCourseByTitle
    }
}
