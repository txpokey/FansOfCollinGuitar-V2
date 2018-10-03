package com.category.fans.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties
@ConfigurationProperties
/**
 * @deprecated non working : start of proof of concept
 */
class YamlConfig {

    private String name
    private String environment
    private List<String> servers = new ArrayList<>()

    // standard getters and setters
    @Bean("ymlConfigBean")
    YamlConfig getYamlBean() {
        def candidate = new YamlConfig()
        candidate
    }
}
