package com.category.fans.config

import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests
import org.testng.annotations.Test

@Slf4j
@Test
@SpringBootTest
@ContextConfiguration( classes = [YamlConfig.class])
class YamlConfigTest extends AbstractTestNGSpringContextTests {
    @Autowired
    private @Qualifier("ymlConfigBean")
    YamlConfig myConfig

    @Value('${google.apikey:NOT_FOUND}')
    String apikey

    void sanityCheck() {
        assert myConfig
        assert apikey
        log.debug("DEBUG HERE")
    }
}