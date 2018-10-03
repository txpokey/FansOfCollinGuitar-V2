package com.category.fans.repository.config

import com.category.fans.service.util.BootstrapDataService
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = ["com.category.fans.repository"])
class JpaConfiguration{

    @Bean("bootstrapTool")
    BootstrapDataService getBootstreapBean() {
        def spinner = new BootstrapDataService()
    }
}
