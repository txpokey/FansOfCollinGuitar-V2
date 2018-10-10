package com.category.fans.service

import com.category.fans.domain.GuitarCourseSchedule
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

    def getMusicCatalog() {
        def fullContent = getScheduleByYearByTermByCourseByTitle()
        def musicCatalog = filterMusicCatalog(fullContent)
        musicCatalog
    }

    def getSections(@NonNull def bySchoolterm, @NonNull def byCourseByTitle) {
        def fullContent = getScheduleByYearByTermByCourseByTitle()
        def sectionsFiltered = filterSections(fullContent,bySchoolterm,byCourseByTitle)
        sectionsFiltered
    }

    private findByPublish() {
        def discovered = repository.findByPublish("1")
        discovered
    }
    private getScheduleByYearByTermByCourseByTitle() {
        List<GuitarCourseSchedule> discovered = findByPublish()
        groupByTermYearSubjectByCourseTitle(discovered)
    }

    private groupByTermYearSubjectByCourseTitle(List<GuitarCourseSchedule> discovered) {
        def groupByCandidate =
                discovered.groupBy(
                        { "${it.term} ${it.year} : ${it.subject}" },
                        { "${it.course} : ${it.title}" })
                        .sort()
        groupByCandidate
    }

    private groupByCourseTitle(List<GuitarCourseSchedule> discovered) {
        def groupByCandidate =
                discovered.groupBy(
                        { "${it.course} : ${it.title}" })
                        .sort()
        groupByCandidate
    }


    private def filterMusicCatalog(@NonNull def fullContent) {
        def topLevelMap = fullContent.collect
        { key, value -> [schoolterm: key.toString(), payload: value.collect { k, v -> k.toString() }] }
        topLevelMap
    }
    private def filterSections(@NonNull def fullContent, @NonNull def bySchoolterm, @NonNull def byCourseByTitle) {
        final def pickBySchoolTerm = { key, value -> key == bySchoolterm }
        final def pickByCourseTitle = { k,v -> k == byCourseByTitle }
        final def buildSectionMap = { k,v -> [ courseSectionList : k.toString() , payload: v ]}
        final def buildSectionsList =
                { key, value -> [schoolterm: key.toString(), payload: value.findAll(pickByCourseTitle).collect(buildSectionMap)] }
        def candidateList = fullContent.findAll(pickBySchoolTerm).collect(buildSectionsList)
        candidateList
    }
}
