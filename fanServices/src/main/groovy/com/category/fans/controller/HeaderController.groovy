package com.category.fans.controller

import com.category.fans.service.HeaderContentService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

interface IHeaderConfigDetail   {
    String label
    String url
}

interface IHeaderConfig   {
    String title
    IHeaderConfigDetail[] targets
}

@RestController
@RequestMapping("/fans")
class HeaderController implements CrossOriginContract {

    @Autowired
    private  @Qualifier("headerContentService")
    HeaderContentService service

    @GetMapping("header")
    protected IHeaderConfig getHeader() {
        final def header = service.getContent()
    }
    private IHeaderConfigDetail[] getHeaderDetails() {
        header?.targets
    }
    private String getHeaderTitle() {
        header?.title
    }
    String[] getRoutesNeededForCrossOriginRegistry() {
        return [ "/fans/header"]
    }
}

class Header implements IHeaderConfig{
    private static final IHeaderConfigDetail[] empty = []
    private final static String defaultTitle = "default title"

    String title = defaultTitle
    IHeaderConfigDetail[] targets = empty

    Header() {}
    Header(String title, IHeaderConfigDetail[] targets ) {
        this.title = title ; this.targets = targets
    }
    Header( String title ) {
        this( title , empty )
    }
    void add( IHeaderConfigDetail detail ) {
        targets += detail
    }
}
class HeaderDetail implements IHeaderConfigDetail{
    String label = "label"
    String url = "url"
    HeaderDetail(String label, String url) {
        this.label = label; this.url = url
    }
    HeaderDetail(Map<String,String> m) {
        this( m.label, m.url )
    }
}