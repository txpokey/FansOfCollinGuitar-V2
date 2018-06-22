package com.category.fans.controller

import com.category.fans.config.FeaturesConfig
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
@ContextConfiguration( classes = [FeaturesConfig.class])
class HeaderControllerTestNgTest extends AbstractTestNGSpringContextTests {
    @Autowired
    private @Qualifier("headerContentService")
    HeaderContentService serviceFromTestHarness

    public void smokeTestViaStandaloneSetup() {
        assert applicationContext
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(pizzaStuffing())
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

    public void fileReading() {
        def headerStub = pizzaStuffing()
        def fetchOutcome = headerStub.getHeader()
        assert fetchOutcome
    }
    /**
     * work around because test harness not injecting service into controller
     * @return
     */
    private HeaderController pizzaStuffing() {
        def headerStub = new HeaderController(constructHeaderTestData()){
            @Override
            IHeaderConfig getHeader() {
                serviceFromTestHarness.getContent()
            }
        }
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

//=-=-=-
//@Test
//@RunWith(SpringRunner.class)
//@WebAppConfiguration
