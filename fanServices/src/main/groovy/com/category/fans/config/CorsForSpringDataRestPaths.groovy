package com.category.fans.config

import com.category.fans.controller.CrossOriginContract
import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter
import org.springframework.stereotype.Component

@Component
 class CorsForSpringDataRestPaths extends RepositoryRestConfigurerAdapter {
    private final String origin = CrossOriginContract.CROSS_SITE_ORIGIN

    @Override
    void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.getCorsRegistry().addMapping("/api/**")
                .allowedOrigins(origin)
    }
}
