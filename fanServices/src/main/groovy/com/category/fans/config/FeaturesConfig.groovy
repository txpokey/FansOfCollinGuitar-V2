package com.category.fans.config

import com.category.fans.controller.Constants
import com.category.fans.controller.CrossOriginContract
import com.category.fans.service.FooterContentService
import com.category.fans.service.HeaderContentService
import com.category.fans.service.bootstrap.repository.CollegeEventsBootstrap
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class FeaturesConfig{

    @Bean(name = "headerContentService")
    HeaderContentService getHeaderService() {
        HeaderContentService service = new HeaderContentService()
        service
    }

    @Bean(name = "footerContentService")
    FooterContentService getFooterService() {
        FooterContentService service = new FooterContentService()
        service
    }

}
