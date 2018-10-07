package com.category.fans.controller.test

import com.category.fans.controller.HeaderController
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.testng.annotations.Test

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@Slf4j
@Test
@SpringBootTest
class HeaderControllerTestNgTest extends AbstractTestNGSpringContextTests {

    @Autowired
    private @Qualifier("headerController")
    HeaderController headerController

    void sanityCheck() {
        log.debug("LOGGER IS HERE")
        assert headerController
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


    final String titleTestData = "Fan Club: Collin College Guitar Studies"
//    private static Log log = LogFactory.getLog(HeaderControllerTestNgTest.class)

}
