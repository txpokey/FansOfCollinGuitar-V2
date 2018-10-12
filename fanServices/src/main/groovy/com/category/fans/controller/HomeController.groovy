package com.category.fans.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class HomeController implements CrossOriginContract {

//    @RequestMapping(value = "/**/{[path:[^\\.]*}")  // original
    @RequestMapping(value = "/guitar*")
    String redirect() {
        // Forward to home page so that route is preserved.
        return "forward:/"
    }

    private static final API_URI_LIST = [ "/api/collegeEvents"]  // cf. CorsForSpringDataRestPaths
    private static final EMPTY_LIST   = []

    @Override
    String[] getRoutesNeededForCrossOriginRegistry() {
        EMPTY_LIST
    }
}

