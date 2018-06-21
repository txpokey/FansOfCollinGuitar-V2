package com.category.fans.service

import com.category.fans.controller.Header
import com.category.fans.controller.HeaderDetail
import com.category.fans.controller.IHeaderConfig
import groovy.json.JsonSlurper
import org.springframework.stereotype.Service

import static com.category.fans.controller.ConstantsLocatingJsonContract.headerJsonLocation as jsonLocation

@Service(value = "headerContentService")
class HeaderContentService{

    HeaderContentService() {
        assert jsonLocation
    }
    IHeaderConfig getContent() {
        getHeaderConfigFromAssets()
    }
    private String getContentFromAssetsAsJson() {
        new File(jsonLocation).text
    }
    private IHeaderConfig getHeaderConfigFromAssets() {
        final String fileContents = getContentFromAssetsAsJson()
        final def asJson =  new JsonSlurper().parseText(fileContents)

        final Map<String,String>[] detailsAsArrayOfMaps = asJson['targets']
        def header = new Header(asJson['title'] as String)
        def y = detailsAsArrayOfMaps.each {  Map<String,String> m -> header.add(new HeaderDetail(m)) }
        return header
    }
}
