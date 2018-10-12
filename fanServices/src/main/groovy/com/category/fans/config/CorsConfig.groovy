package com.category.fans.config

import com.category.fans.controller.Constants
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

import static com.category.fans.controller.Constants.CROSS_SITE_ORIGIN_LIST

@Configuration
class CorsConfig{

    @Bean
    WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            void addCorsMappings(CorsRegistry registry) {
                final String[] routes = getRoutesNeededForCrossOriginRegistry()
                final String[] originList = CROSS_SITE_ORIGIN_LIST
                routes.each { route -> registry.addMapping(route).allowedOrigins(CROSS_SITE_ORIGIN_LIST) }
                routes
            }
        }
    }
    private static String[] getRoutesNeededForCrossOriginRegistry() {
        final String[] routes = Constants.getRoutesNeededForCrossOriginRegistry()
    }

}
