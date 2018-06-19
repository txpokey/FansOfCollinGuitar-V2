package com.category.fans.controller

import org.apache.commons.logging.Log
import org.apache.commons.logging.LogFactory
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.mock.web.MockHttpServletRequest
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.springframework.test.context.web.WebAppConfiguration
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext
import org.testng.annotations.Test

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@Test
@RunWith(SpringRunner.class)
@WebAppConfiguration
@ContextConfiguration
class HeaderControllerTestNgTest extends AbstractTestNGSpringContextTests {
    @Autowired
    private WebApplicationContext wac // NOT NEEDED for standaloneSetup
    @Autowired MockHttpServletRequest request // NOT NEEDED for standaloneSetup

    public void smokeTestViaStandaloneSetup() {
        assert applicationContext
        assert request
        assert wac
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(new HeaderController(constructHeaderTestData()))
                .defaultRequest(get("/fans/header"))
                .alwaysExpect(status().isOk())
                .alwaysExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .build()
        assert mockMvc
        def WAT = mockMvc.perform(get("/fans/header"))
        assert WAT
        log.debug("applicationContext:> " + applicationContext.properties )
        log.debug("HERE")
    }

    IHeaderConfig constructHeaderTestData() {
        new Header( titleTestData ,constructHeaderDetailsTestData())
    }

    IHeaderConfigDetail[] constructHeaderDetailsTestData() {
        [new HeaderDetail("myLabel" , "angular.io")]
    }
    final String titleTestData = "Fan Club: Collin College Guitar Studies"
    private static Log log = LogFactory.getLog(HeaderControllerTestNgTest.class)

}
