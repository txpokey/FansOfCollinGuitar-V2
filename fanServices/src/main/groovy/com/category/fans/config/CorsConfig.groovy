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
//                originList.each { origin ->
//                    routes.each { route -> registry.addMapping(route).allowedOrigins(origin) }
//                }
                routes.each { route -> registry.addMapping(route).allowedOrigins(CROSS_SITE_ORIGIN_LIST) }
//                routes.each { route -> registry.addMapping(route).allowedOrigins("*") }
                routes
            }
        }
    }
    private static String[] getRoutesNeededForCrossOriginRegistry() {
//        final Constants constants = new Constants()
        final String[] routes = Constants.getRoutesNeededForCrossOriginRegistry()
    }

}
