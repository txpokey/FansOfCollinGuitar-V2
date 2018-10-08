package com.category.fans.service

import com.category.fans.repository.GuitarCourseScheduleRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.lang.NonNull
import org.springframework.stereotype.Service

@Service("guitarCourseScheduleService")
class GuitarCourseScheduleContentService{

    @Autowired
    private GuitarCourseScheduleRepository repository

    def getContent() {
        getScheduleByYearByTermByCourseByTitle()
    }
    private getScheduleByYearByTermByCourseByTitle() {
        def discovered = repository.findByPublish("1")
        def groupByCandidatePipe =
                discovered.groupBy(
                        { "${it.term} ${it.year} : ${it.subject}" },
                        { "${it.course} : ${it.title}" })
                        .sort()
        groupByCandidatePipe
    }
    def getMusicCatalog() {
        def fullContent = getScheduleByYearByTermByCourseByTitle()
        def musicCatalog = filterMusicCatalog(fullContent)
        musicCatalog
    }
    private def filterMusicCatalog(@NonNull def fullContent) {
//        def topLevelMap = fullContent.collect { key, value -> [ schoolterm : "${key}" , payload : value.collect{ k, v -> k }
        def topLevelMap = fullContent.collect { key, value -> [ schoolterm : key.toString() , payload : value
                .collect{ k, v -> k.toString() } ]}
        topLevelMap
    }
}
