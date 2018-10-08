package com.category.fans.service.springdata

import com.category.fans.repository.GuitarCourseScheduleRepository
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.lang.NonNull
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.testng.annotations.Test

@Test
@Slf4j
@SpringBootTest
class GuitarCourseScheduleRepositoryTest extends AbstractTestNGSpringContextTests {
    @Autowired
    private GuitarCourseScheduleRepository repository

    void sanityCheck() {
        assert repository
    }

    void exploreGroupByMultipleKeys() {
        getGroupByMultipleKeys()
    }

    private getGroupByMultipleKeys() {
        def discovered = repository.findByPublish("1")
        def groupByCandidatePipe =
                discovered.groupBy(
                        { "${it.term} ${it.year} : ${it.subject}" },
                        { "${it.course} : ${it.title}" })
                        .sort()
        groupByCandidatePipe
    }

    void exploreFindAllByYearBySubject() {
        def discovered = repository.findByYearAndSubject("2018", "MUEN")
        def discovered2 = repository.findByYearAndSubjectAllIgnoreCase("2018", "muen")
        assert discovered
        assert discovered2
        assert discovered.size() == discovered2.size()
    }

    void buildingMusicCatalog() {
        def fullContent = getGroupByMultipleKeys()
        assert fullContent
        def topLevelKeys = fullContent.collect { key, value -> key }
        assert topLevelKeys
        def topLevelMap = getMusicCatalog fullContent
        assert topLevelMap
    }
    private def getMusicCatalog(@NonNull def fullContent) {
        def topLevelMap = fullContent.collect { key, value -> [ (key) : value.collect{ k, v -> k } ] }
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