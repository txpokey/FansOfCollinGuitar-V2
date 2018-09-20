package javial

import org.springframework.boot.SpringApplication
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class App{

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    String redirect() {
        // Forward to home page so that route is preserved.
        return "forward:/";
    }

    static void main(String[] args) {
        SpringApplication.run App, args
    }
} 