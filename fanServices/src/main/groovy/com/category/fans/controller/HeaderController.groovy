package com.category.fans.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

interface IHeaderConfigDetail   {
    String label ;
    String url ;
}

interface IHeaderConfig   {
    String title ;
    IHeaderConfigDetail[] targets;
}

@RestController
@RequestMapping("/fans")
class HeaderController{

    @GetMapping("header")
    IHeaderConfig serviceMock() {
        new Header("Fan Club: Collin College Guitar Studies")
//    Header dum = new Header("Fan Club: Collin College Guitar Studies")
//    return dum
    }

}


class Header implements IHeaderConfig{
    String title ;
    IHeaderConfigDetail[] targets;

    Header(String title, IHeaderConfigDetail[] targets ) {
        this.title = title ; this.targets = targets ;
    }
    Header( String title ) {
        this( title , null );
    }
}