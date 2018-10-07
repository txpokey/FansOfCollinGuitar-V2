package com.category.fans.service.springdata

import com.category.fans.repository.GuitarCourseScheduleRepository
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
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

}