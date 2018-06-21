package javial

import com.category.fans.controller.Constants
import com.category.fans.controller.ConstantsContract
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Controller
public class App{

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
//                registry.addMapping("/fans/header").allowedOrigins(ConstantsContract.CROSS_SITE_ORIGIN)
//                registry.addMapping("/fans/footer").allowedOrigins(ConstantsContract.CROSS_SITE_ORIGIN)
                final String[] routes = Constants.getRoutesNeededForCrossOriginRegistry()
                final String origin = ConstantsContract.CROSS_SITE_ORIGIN
                routes.each { route -> registry.addMapping(route).allowedOrigins(origin) }
            }
        };
    }
} 