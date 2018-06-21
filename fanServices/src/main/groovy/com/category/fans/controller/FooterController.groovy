package com.category.fans.controller

import groovy.json.JsonSlurper
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
//"label": "Guitar Studies Social Media Contacts",
//"runtime" : [ "guitar-dept-display-flex-column", "guitar-dept-display-flex-nowrap"],
//"payload": [
//        {
//            "label": "Faculty",
//            "icon" : "fa fa-graduation-cap",
//            "logo" : "#0",
//            "url": "mailto:fvera@collin.edu"
//        },

@RestController
@RequestMapping("/fans")
class FooterController{
    final String footerJsonLocation = "/home/mak/var/work/project/punisher/edu.collin/dev" +
            ".collin/angularFanClub/fanServices/src/main/resources/assets/json/footer-controller.json"

    final static String title = "default title"
    IFooter[] footer

    FooterController() {}

    @GetMapping("footer")
    IFooter[] getFooter() {
        footer = getFooterArrayFromAssetsAsJson()
    }

    FooterController(IFooter footer) {
        this.footer = footer
    }

    String getFooterFromAssetsAsJson() {
        new File(footerJsonLocation).text
    }

    IFooter[] getFooterArrayFromAssetsAsJson() {
        final String fileContents = getFooterFromAssetsAsJson()
        final def fromJson = new JsonSlurper().parseText(fileContents)

        IFooter[] candidate = []
        fromJson.each {
            arrayElement -> candidate += getFooterArrayFromAssetsAsJson(arrayElement)
        }
//
//        final Map<String,String>[] detailsAsArrayOfMaps = asJson['payload']
//        def footer = new Footer(asJson['title'] as String)
//        def y = detailsAsArrayOfMaps.each {  Map<String,String> m -> footer.add(new FooterDetail(m)) }
//        return footer
        return candidate
    }

    IFooter getFooterArrayFromAssetsAsJson(Map<String, String> fromJson) {
        final Map<String, String>[] detailsAsArrayOfMaps = fromJson['payload']
        final label = fromJson['label'] as String
        final runtime = fromJson['runtime'] as String[]
        def footer = new Footer(label, runtime)
        def y = detailsAsArrayOfMaps.each { Map<String, String> m -> footer.add(new FooterDetail(m)) }
        return footer
    }
}

class Footer implements IFooter{
    final String label = FooterController.title
    final String[] runtime
    IFooterDetail[] payload = []

    Footer() {}

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

    FooterDetail() {}

    FooterDetail(Map<String, String> m) {
        this.label = m.label
        this.icon = m.icon
        this.logo = m.logo
        this.url = m.url
    }
}