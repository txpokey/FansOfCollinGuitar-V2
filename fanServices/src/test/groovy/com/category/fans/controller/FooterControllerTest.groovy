package com.category.fans.controller

import com.category.fans.config.FeaturesConfig
import com.category.fans.service.FooterContentService
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
public class FooterControllerTest  extends AbstractTestNGSpringContextTests {
    @Autowired
    private @Qualifier("footerContentService")
    FooterContentService serviceFromTestHarness

    public void testGetFooterArrayFromAssetsAsJson() {
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(pizzaStuffing())
                .defaultRequest(get("/fans/footer"))
                .alwaysExpect(status().isOk())
                .alwaysExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .build()
        assert mockMvc
        def WAT = mockMvc.perform(get("/fans/footer"))
        assert WAT
        log.debug("HERE")
    }
    public void fileReading() {
        def workAround = pizzaStuffing()
        def fetchOutcome = workAround.getFooter()
        assert fetchOutcome
    }
    private FooterController pizzaStuffing() {
        def workAround = new FooterController(){
            @Override
            IFooter[] getFooter() {
                serviceFromTestHarness.getContent()
            }
        }
    }

    private static Log log = LogFactory.getLog(FooterControllerTest.class)

}