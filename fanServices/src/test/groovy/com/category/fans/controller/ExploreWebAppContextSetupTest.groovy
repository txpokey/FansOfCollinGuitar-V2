package com.category.fans.controller

import groovy.util.logging.Slf4j
import org.mockito.MockitoAnnotations
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.mock.web.MockHttpServletRequest
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext
import org.testng.annotations.BeforeMethod
import org.testng.annotations.Test

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get

@Slf4j
@Test
@SpringBootTest // TODO : flush out controller MVC tests
class ExploreWebAppContextSetupTest extends AbstractTestNGSpringContextTests{

    private MockMvc mockMvc
    @Autowired
    private WebApplicationContext wac // NOT NEEDED for standaloneSetup
    @Autowired MockHttpServletRequest request // NOT NEEDED for standaloneSetup
//
    @BeforeMethod
    void before() {
        MockitoAnnotations.initMocks(this)
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).dispatchOptions(true).build()
    }

    void sanityCheck() {
        assert mockMvc
        assert applicationContext
        assert wac
        assert request
//        log.debug("applicationContext:> " + applicationContext.properties )
        log.debug("")
    }

    /**
     * TODO seeing empty response content, and my service method mapping is not routing
     */
    void smokeTestViaWebAppContextSetup() {
        sanityCheck()
//        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build()
//        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(new HeaderController(constructHeaderTestData())).build()
//        mockMvc = MockMvcBuilders.webAppContextSetup(this.wac)
//                .defaultRequest(get("/fans/header").accept(MediaType.APPLICATION_JSON))
//                .alwaysExpect(status().isOk())
//                .alwaysExpect(content().contentType("application/jsoncharset=UTF-8"))
//                .build()
        def WAT = mockMvc.perform(get("/fans/header").contentType(MediaType.APPLICATION_JSON))
        log.debug("HERE")
    }
}
//@Test
//@WebAppConfiguration
//class HeaderControllerTestNgTest extends AbstractTestNGSpringContextTests {
//    private MockMvc mockMvc
//
//    private WebApplicationContext wac =  ContextLoader.getCurrentWebApplicationContext()
//
//    public void smokeTest() {
//       this.wac =  ContextLoader.getCurrentWebApplicationContext()
//
//        assert null == mockMvc
//        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build()
//    }
//}

//
//    private MockMvc mockMvc
//
//    @Autowired
//    private WebApplicationContext wac
//    @Autowired MockHttpServletRequest request

