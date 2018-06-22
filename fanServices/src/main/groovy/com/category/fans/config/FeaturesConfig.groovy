package com.category.fans.config

import com.category.fans.service.FooterContentService
import com.category.fans.service.HeaderContentService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

// TODO : I should not need this to test the controller
@Configuration
class FeaturesConfig{

    @Bean(name = "headerContentService")
    HeaderContentService getHeaderService() {
        HeaderContentService service = new HeaderContentService()
        return service
    }

    @Bean(name = "footerContentService")
    FooterContentService getFooterService() {
        FooterContentService service = new FooterContentService()
        return service
    }

}
