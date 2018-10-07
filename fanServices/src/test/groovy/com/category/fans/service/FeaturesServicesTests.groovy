package com.category.fans.service

import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.testng.annotations.Test

@Slf4j
@Test
@SpringBootTest
class FeaturesServicesTests extends AbstractTestNGSpringContextTests {
    @Autowired
    private @Qualifier("headerContentService")
    HeaderContentService headerContentService

    @Autowired
    private @Qualifier("footerContentService")
    FooterContentService footerContentService

    void sanityCheck() {
        log.debug("LOGGER IS HERE")
        assert headerContentService
        assert footerContentService
    }
    void fileReading() {
        readHeaderContent()
        readFooterContent()
    }

    private void readFooterContent() {
        def footerContent = footerContentService.getContent()
        assert footerContent
    }
    private void readHeaderContent() {
        def footerContent = headerContentService.getContent()
        assert footerContent
    }
}
