package com.category.fans.service

import com.category.fans.domain.GuitarCourseSchedule
import com.category.fans.repository.GuitarCourseScheduleRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.lang.NonNull
import org.springframework.stereotype.Service
import static com.category.fans.domain.constants.SpecialDomainValues.GUITAR_SECTION_HEADER as GUITAR_SECTION_HEADER

@Service("guitarCourseScheduleService")
class GuitarCourseScheduleContentService{

    @Autowired
    private GuitarCourseScheduleRepository repository

    def getContent() {
        getScheduleByYearByTermByCourseByTitle()
    }

    def getMusicCatalog() {
        def fullContent = getScheduleByYearByTermByCourseByTitle()
        def musicCatalog = processMusicCatalogDiscovered(fullContent)
        musicCatalog
    }

    def getSections(@NonNull def bySchoolterm, @NonNull def byCourseByTitle) {
        def fullContent = getScheduleByYearByTermByCourseByTitle()
        def sectionsProcessed = processSectionsDiscovered(fullContent,bySchoolterm,byCourseByTitle)
        sectionsProcessed
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

    private def processMusicCatalogDiscovered(@NonNull def fullContent) {
        def topLevelListOfMaps = fullContent.collect
            { key, value -> [schoolterm: key.toString(), payload: value.collect { k, v -> k.toString() }] }
        def sortedMap = topLevelListOfMaps.sort{ a,b ->
            b.schoolterm.compareTo( a.schoolterm )
        }
        sortedMap
    }
    private def processSectionsDiscovered(@NonNull def fullContent, @NonNull def bySchoolterm, @NonNull def byCourseByTitle) {
        final def pickBySchoolTerm = { key, value -> key == bySchoolterm }
        final def pickByCourseTitle = { k,v -> k == byCourseByTitle }
        final def buildSectionMap = { k,v -> [ courseSectionList : k.toString() , payload: v ]}
        final def buildSectionsList =
                { key, value ->
                    def list = value.findAll(pickByCourseTitle).collect(buildSectionMap)
                    prefaceListWithHeader(list)
                    [schoolterm: key.toString(), payload : list ] }
        def candidateList = fullContent.findAll(pickBySchoolTerm).collect(buildSectionsList)
        candidateList
    }

    /**
     * adding the header here, rather than in the modal javascript.
     * nb. you would think that inject is too much ceremony, but runtime '+' adds the entire
     * array as one element instead of adding each element.
     * @param list
     * @return
     */
    private prefaceListWithHeader(@NonNull List<LinkedHashMap<String, String>> list) {
        final def HEADER = GUITAR_SECTION_HEADER.clone()
        def listPayload = list[0].payload
        def candidate = listPayload.inject(HEADER, { seed, it -> seed += it })
        list[0].payload = candidate
    }


}
