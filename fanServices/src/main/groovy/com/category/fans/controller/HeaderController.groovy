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

    final static title = "Fan Club: Collin College Guitar Studies"
    IHeaderConfig header

    @GetMapping("header")
    IHeaderConfig getHeader() {
        header
    }
    IHeaderConfigDetail[] getHeaderDetails() {
        header?.targets
    }
    String getHeaderTitle() {
        header?.title
    }
    HeaderController( IHeaderConfig header ) {
        this.header = header
    }

}

class Header implements IHeaderConfig{
    String title = "default title"
    IHeaderConfigDetail[] targets = []

    Header(String title, IHeaderConfigDetail[] targets ) {
        this.title = title ; this.targets = targets
    }
    Header( String title ) {
        this( title , null )
    }
    void add( IHeaderConfigDetail detail ) {
        targets << detail
    }
}
class HeaderDetail implements IHeaderConfigDetail{
    String label
    String url
    HeaderDetail(String label, String url) {
        this.label = label; this.url = url
    }
//
//    HeaderDetail(Map<String,String> m) {
//        this( m.label, m.url )
//    }
}