package javial

import com.category.fans.controller.Constants
import com.category.fans.controller.CrossOriginContract
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Controller
public class App {

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String redirect() {
        // Forward to home page so that route is preserved.
        return "forward:/";
    }
    String getGreeting() {
        return 'Hello world.'
    }
    /*
     * NOT needed or used when executable jar built via:
     *     spring jar <jarName> META-INF src/main/groovy
     */
    static void main(String[] args) {
        println new App().greeting
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