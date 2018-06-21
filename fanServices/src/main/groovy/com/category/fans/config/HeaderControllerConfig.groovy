package com.category.fans.config

import com.category.fans.service.HeaderContentService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

// TODO I left this as an example.
@Configuration
class HeaderControllerConfig{
    @Bean(name = "headerFOOContentService")
    HeaderContentService getService() {
       HeaderContentService service = new HeaderContentService()
        return null
    }

}
