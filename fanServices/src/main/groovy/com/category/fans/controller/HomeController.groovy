package com.category.fans.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class HomeController implements CrossOriginContract {

//    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    @RequestMapping(value = "/[^api]*/{[path:[^\\.]*}")
    String redirect() {
        // Forward to home page so that route is preserved.
        return "forward:/"
    }

    @Override
    String[] getRoutesNeededForCrossOriginRegistry() {
        return [ "/api/collegeEvents"]
    }
}

