package com.category.fans.service.springdata

import com.category.fans.service.GuitarCourseScheduleContentService
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.testng.annotations.Test

@Test
@Slf4j
@SpringBootTest
class GuitarCourseScheduleServiceTest extends AbstractTestNGSpringContextTests {

    @Autowired
    @Qualifier("guitarCourseScheduleService")
    GuitarCourseScheduleContentService service

    void sanityCheck() {
        assert service
    }

    void exploreUsingService() {
        assert service
        def content = service.getContent()
        assert content
    }
}