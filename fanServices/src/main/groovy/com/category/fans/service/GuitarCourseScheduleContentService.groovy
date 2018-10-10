package com.category.fans.service

import com.category.fans.domain.GuitarCourseSchedule
import com.category.fans.repository.GuitarCourseScheduleRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.lang.NonNull
import org.springframework.stereotype.Service

@Service("guitarCourseScheduleService")
class GuitarCourseScheduleContentService{
    private final static HEADERS_FOR_DISPLAY_COLUMNS = [
            year: "Year",
            term: "Term",
            publish: "publish",
            status: "Status",
            crn: "CRN",
            subject: "Subject",
            course: "Course",
            section: "Section",
            credits: "Credits",
            title: "Title",
            days: "Days",
            time: "Time",
            dates: "Dates",
            location: "Location",
            maxSize: "MaxSize",
            seatsOpen: "SeatsOpen",
            maxWaiting: "MaxWaiting",
            waitingOpen: "WaitingOpen",
            instructor: "Instructor"
    ]
    private final static HEADER = [ new GuitarCourseSchedule(HEADERS_FOR_DISPLAY_COLUMNS) ]

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
                { key, value ->
                    def list = value.findAll(pickByCourseTitle).collect(buildSectionMap)
                    def listPayload = list[0].payload
                    def headers = HEADER.clone()
                    def candidate = listPayload.inject(headers,{ seed, it -> seed += it })
                    list[0].payload = candidate
                    [schoolterm: key.toString(), payload : list ] }
        def candidateList = fullContent.findAll(pickBySchoolTerm).collect(buildSectionsList)
        candidateList
    }


}
