package com.category.fans.controller

import org.junit.runner.RunWith
import org.mockito.MockitoAnnotations
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
import org.testng.annotations.BeforeMethod
import org.testng.annotations.Test

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get

//org.springframework.boot.test.autoconfigure.web.servlet

@Test
@RunWith(SpringRunner.class)
@WebAppConfiguration
@ContextConfiguration
//@WebMvcTest(controllers = HeaderController.class, secure = false)
//@SpringBootTest(classes = HeaderController.class)
class ExploreWebAppContextSetupTest extends AbstractTestNGSpringContextTests{
//class ExploreWebAppContextSetupTest {

    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext wac // NOT NEEDED for standaloneSetup
    @Autowired MockHttpServletRequest request // NOT NEEDED for standaloneSetup
//
    @BeforeMethod
    void before() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).dispatchOptions(true).build();
    }

    /**
     * TODO seeing empty response content, and my service method mapping is not routing
     */
    public void smokeTestViaWebAppContextSetup() {
        assert applicationContext
//        assert request
        assert wac
//        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build()
//        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(new HeaderController(constructHeaderTestData())).build()
        assert mockMvc
//        mockMvc = MockMvcBuilders.webAppContextSetup(this.wac)
//                .defaultRequest(get("/fans/header").accept(MediaType.APPLICATION_JSON))
//                .alwaysExpect(status().isOk())
//                .alwaysExpect(content().contentType("application/json;charset=UTF-8"))
//                .build()
        assert mockMvc
        def WAT = mockMvc.perform(get("/fans/header").contentType(MediaType.APPLICATION_JSON))

        log.debug("applicationContext:> " + applicationContext.properties )
        log.debug("HERE")
    }
}
//@Test
//@WebAppConfiguration
//class HeaderControllerTestNgTest extends AbstractTestNGSpringContextTests {
//    private MockMvc mockMvc;
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
//    private MockMvc mockMvc;
//
//    @Autowired
//    private WebApplicationContext wac
//    @Autowired MockHttpServletRequest request

