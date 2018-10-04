package com.category.fans

import com.category.fans.service.bootstrap.BootstrapDataService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

import javax.annotation.PostConstruct

@SpringBootApplication(scanBasePackages = ["com.category.fans"])

class App {
    static void main(String[] args) {
        SpringApplication.run App, args
    }
    @Autowired
    @Qualifier("bootstrapTool")
    private BootstrapDataService spinner

    @PostConstruct
    void postConstruct() {
        assert spinner
        def result = spinner.spinUp()
        assert result
    }
}