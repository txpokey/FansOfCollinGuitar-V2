package com.category.fans.controller

import com.category.fans.service.GuitarCourseScheduleContentService
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@Slf4j
@RestController
@RequestMapping("/fans/classes")
class GuitarCourseScheduleController implements CrossOriginContract {
    @Override
    String[] getRoutesNeededForCrossOriginRegistry() {
        [ "/fans/classes/all" , "/fans/classes/musicCatalog" ,"/fans/classes/search" ]
    }
    @Autowired
    private @Qualifier("guitarCourseScheduleService")
    GuitarCourseScheduleContentService service

    @GetMapping("all")
    protected def getScheduleByYearByTermByCourseByTitle() {
        final def scheduleByYearByTermByCourseByTitle = service.getContent()
        scheduleByYearByTermByCourseByTitle
    }
    @GetMapping("musicCatalog")
    def getMusicCatalog() {
        final def musicCatalog = service.getMusicCatalog()
        musicCatalog
    }
    @GetMapping("search")
    def getSections(@RequestParam String bySchoolTerm, @RequestParam String byCourseTitle) {
        final def musicCatalog = service.getSections(bySchoolTerm,byCourseTitle)
        musicCatalog
    }
}
