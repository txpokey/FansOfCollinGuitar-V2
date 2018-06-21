package javial

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

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
} 