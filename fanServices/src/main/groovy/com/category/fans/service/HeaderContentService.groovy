package com.category.fans.service

import com.category.fans.controller.ConstantsLocatingJsonContract
import com.category.fans.controller.Header
import com.category.fans.controller.HeaderDetail
import com.category.fans.controller.IHeaderConfig
import groovy.json.JsonSlurper
import org.springframework.stereotype.Service

@Service(value = "headerContentService")
class HeaderContentService{
    final String headerJsonLocation = ConstantsLocatingJsonContract.headerJsonLocation

    HeaderContentService() {
        assert headerJsonLocation
    }
    IHeaderConfig getContent() {
        getHeaderConfigFromAssets()
    }
    private String getContentFromAssetsAsJson() {
        new File(headerJsonLocation).text
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
