package com.category.fans.controller.test.config

import com.category.fans.controller.HeaderController
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class ControllerTestConfig{

    @Bean("headerController")
    def getHeaderController() {
        new HeaderController()
    }
}
