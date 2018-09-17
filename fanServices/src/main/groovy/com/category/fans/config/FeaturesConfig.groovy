package com.category.fans.config

import com.category.fans.controller.Constants
import com.category.fans.controller.CrossOriginContract
import com.category.fans.service.FooterContentService
import com.category.fans.service.HeaderContentService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

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
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                final String[] routes = getRoutesNeededForCrossOriginRegistry()
                final String origin = CrossOriginContract.CROSS_SITE_ORIGIN
                routes.each { route -> registry.addMapping(route).allowedOrigins(origin) }
            }
        };
    }
    private static String[] getRoutesNeededForCrossOriginRegistry() {
        final Constants constants = new Constants()
        final String[] routes = constants.getRoutesNeededForCrossOriginRegistry()
    }
}
