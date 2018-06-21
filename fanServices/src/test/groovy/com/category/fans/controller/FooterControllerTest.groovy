package com.category.fans.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.testng.annotations.Test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.testng.Assert.*;

public class FooterControllerTest {

    @Test
    public void testGetFooterArrayFromAssetsAsJson() {
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(new FooterController())
                .defaultRequest(get("/fans/footer"))
                .alwaysExpect(status().isOk())
                .alwaysExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .build()
        assert mockMvc
        def WAT = mockMvc.perform(get("/fans/footer"))
        assert WAT
        log.debug("HERE")
    }

    @Test
    public void testGetFooterArrayFromAssetsAsJson1() {
    }

    private static Log log = LogFactory.getLog(FooterControllerTest.class)

}