package com.category.fans.controller

import com.category.fans.service.FooterContentService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

interface IFooterDetail{
    String label
    String icon
    String logo
    String url
}

interface IFooter{
    String label
    String[] runtime
    IFooterDetail[] payload
}

@RestController
@RequestMapping("/fans")
class FooterController implements CrossOriginContract {
    IFooter[] footer
    @Autowired
    private @Qualifier("footerContentService")
    FooterContentService service

    FooterController() {}

    @GetMapping("footer")
    protected IFooter[] getFooter() {
        footer = service.getContent()
    }

    FooterController(IFooter footer) {
        this.footer = footer
    }

    String[] getRoutesNeededForCrossOriginRegistry() {
        return [ "/fans/footer"]
    }
}

class Footer implements IFooter{
    private final static String defaultTitle = "default title"

    private String label = defaultTitle
    final String[] runtime
    IFooterDetail[] payload = [] // TODO : why cant this be private?

    Footer(String label, String[] runtime) {
        this.label = label; this.runtime = runtime
    }

    void add(IFooterDetail detail) {
        payload += detail
    }
}

class FooterDetail implements IFooterDetail{
    String label = "label"
    String icon = "icon"
    String logo = "logo"
    String url = "url"

    FooterDetail(Map<String, String> m) {
        this.label = m.label
        this.icon = m.icon
        this.logo = m.logo
        this.url = m.url
    }
}