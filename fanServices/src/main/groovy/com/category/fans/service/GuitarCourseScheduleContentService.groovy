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
    class CourseScheduleUtility {
        def getMusicCatalog(@NonNull def content) {
//            def foo = content.
        }
    }
}
//"schoolTermLabel": "Spring 2018 Credit",
//"schoolYear": 2018,
//"schoolSemester": "spring",
//"payload": [
//        {
//            "relevent": true,
//            "discipline": "MUSI",
//            "class": 1116,
//            "name": "Sight Singing & Ear Training I "
//        },