package com.category.fans.service.util

import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.testng.annotations.Test

import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@Slf4j
@Test
@SpringBootTest
class BootstrapDataServiceTest extends AbstractTestNGSpringContextTests {

    @PersistenceContext
    private EntityManager entityManager

    @Autowired
    @Qualifier("bootstrapTool")
    private BootstrapDataService spinner

    void testSpinUp() {
        assert entityManager
        assert spinner
        def result = spinner.spinUp()
        assert result
    }
}