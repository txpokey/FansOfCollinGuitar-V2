package com.category.fans.controller.test

import com.category.fans.config.FeaturesConfig
import com.category.fans.controller.*
import com.category.fans.controller.test.config.ControllerTestConfig
import com.category.fans.service.FooterContentService
import com.category.fans.service.HeaderContentService
import org.apache.commons.logging.Log
import org.apache.commons.logging.LogFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.http.MediaType
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.testng.annotations.Test

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@Test
@ContextConfiguration( classes = [FeaturesConfig.class, ControllerTestConfig.class])
class HeaderControllerTestNgTest extends AbstractTestNGSpringContextTests {
    @Autowired
    private @Qualifier("headerContentService")
    HeaderContentService headerContentService

    @Autowired
    private @Qualifier("footerContentService")
    FooterContentService footerContentService

    @Autowired
    private @Qualifier("headerController")
    HeaderController headerController

    void sanityCheck() {
        log.debug("LOGGER IS HERE")
        assert headerContentService
        assert headerController
        assert footerContentService
    }

    void fileReading() {
        readHeaderContent()
        readFooterContent()
    }

    void smokeTestViaStandaloneSetup() {
        assert applicationContext
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(headerController)
                .defaultRequest(get("/fans/header"))
                .alwaysExpect(status().isOk())
                .alwaysExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .build()
        assert mockMvc
        def WAT = mockMvc.perform(get("/fans/header"))
        assert WAT // TODO: need to confirm header content
        log.debug("applicationContext:> " + applicationContext.properties )
        log.debug("HERE")
    }


    private void readFooterContent() {
        def footerContent = footerContentService.getContent()
        assert footerContent
    }
   private void readHeaderContent() {
        def footerContent = headerContentService.getContent()
        assert footerContent
    }

    final String titleTestData = "Fan Club: Collin College Guitar Studies"
    private static Log log = LogFactory.getLog(HeaderControllerTestNgTest.class)

}

//=-=-=-
//@Test
//@RunWith(SpringRunner.class)
//@WebAppConfiguration
