package com.category.fans.config

import com.category.fans.service.HeaderContentService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

// TODO : I should not need this to test the controller
@Configuration
class HeaderControllerConfig{
    @Bean(name = "headerContentService")
    HeaderContentService getService() {
       HeaderContentService service = new HeaderContentService()
        return service
    }

}
