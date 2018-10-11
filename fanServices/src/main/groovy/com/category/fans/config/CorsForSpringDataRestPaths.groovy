package com.category.fans.config

import com.category.fans.controller.Constants
import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter
import org.springframework.stereotype.Component

@Component
 class CorsForSpringDataRestPaths extends RepositoryRestConfigurerAdapter {
//    private final String origin = Constants.CROSS_SITE_ORIGIN_NG_SERVE
    private final String originList = Constants.CROSS_SITE_ORIGIN_LIST

    @Override
    void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        final def route = "/api/**"
        originList.each {
            origin -> addMapping(config, origin, route)
        }
    }

    private addMapping(RepositoryRestConfiguration config, String origin, String route) {
        config.getCorsRegistry().addMapping(route)
                .allowedOrigins(origin)
    }
}
