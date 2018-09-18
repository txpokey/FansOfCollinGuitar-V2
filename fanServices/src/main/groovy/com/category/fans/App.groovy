package com.category.fans

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication(scanBasePackages = ["com.category.fans"])
class App { // TODO : clean up

//    @RequestMapping(value = "/**/{[path:[^\\.]*}")
//    public String redirect() {
//        // Forward to home page so that route is preserved.
//        return "forward:/";
//    }
//    String getGreeting() {
//        return 'Hello world.'
//    }
    static void main(String[] args) {
        SpringApplication.run App, args
    }
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                final String[] routes = getRoutesNeededForCrossOriginRegistry()
//                final String origin = CrossOriginContract.CROSS_SITE_ORIGIN
//                routes.each { route -> registry.addMapping(route).allowedOrigins(origin) }
//            }
//        };
//    }
//    private static String[] getRoutesNeededForCrossOriginRegistry() {
//        final Constants constants = new Constants()
//        final String[] routes = constants.getRoutesNeededForCrossOriginRegistry()
//    }
} 