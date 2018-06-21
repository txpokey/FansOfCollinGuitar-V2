package com.category.fans.controller

import groovy.json.JsonSlurper
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
    final String headerJsonLocation = "/home/mak/var/work/project/punisher/edu.collin/dev" +
            ".collin/angularFanClub/fanServices/src/main/resources/assets/json/header-controller.json"

    final static String title = "default title"
    IHeaderConfig header

    @GetMapping("header")
    IHeaderConfig getHeader() {
        header = getHeaderConfigFromAssets()
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
    String getDetailsFromAssetsAsJson() {
        new File(headerJsonLocation).text
    }
    IHeaderConfig getHeaderConfigFromAssets() {
        final String fileContents = getDetailsFromAssetsAsJson()
        final def asJson =  new JsonSlurper().parseText(fileContents)

        final Map<String,String>[] detailsAsArrayOfMaps = asJson['targets']
        def header = new Header(asJson['title'] as String)
        def y = detailsAsArrayOfMaps.each {  Map<String,String> m -> header.add(new HeaderDetail(m)) }
        return header
    }
}

class Header implements IHeaderConfig{
    final String title = HeaderController.title
    IHeaderConfigDetail[] targets = []

    Header() {}
    Header(String title, IHeaderConfigDetail[] targets ) {
        this.title = title ; this.targets = targets
    }
    Header( String title ) {
        this( title , [] )
    }
    void add( IHeaderConfigDetail detail ) {
        targets += detail
    }
}
class HeaderDetail implements IHeaderConfigDetail{
    String label = "label"
    String url = "url"
    HeaderDetail() {}
    HeaderDetail(String label, String url) {
        this.label = label; this.url = url
    }
    HeaderDetail(Map<String,String> m) {
        this( m.label, m.url )
    }
}