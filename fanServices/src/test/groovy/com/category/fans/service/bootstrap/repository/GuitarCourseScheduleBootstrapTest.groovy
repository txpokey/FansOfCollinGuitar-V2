package com.category.fans.service.bootstrap.repository

import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.testng.annotations.Test

@Slf4j
@Test
@SpringBootTest
class GuitarCourseScheduleBootstrapTest extends AbstractTestNGSpringContextTests {

    @Autowired
    @Qualifier("guitarCoursesBootstrap")
    GuitarCourseScheduleBootstrap bootstrap

    void sanityCheck() {
        assert bootstrap
    }

    void testSpinUp() {
        assert bootstrap
        def result = bootstrap.spinUp()
        assert result
        log.debug("HERE")
    }

}