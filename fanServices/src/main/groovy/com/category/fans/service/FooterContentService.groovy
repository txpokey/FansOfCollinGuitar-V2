package com.category.fans.service

import com.category.fans.controller.Footer
import com.category.fans.controller.FooterDetail
import com.category.fans.controller.IFooter
import groovy.json.JsonSlurper
import org.springframework.stereotype.Service

import static com.category.fans.controller.ConstantsLocatingJsonContract.footerJsonLocation as jsonLocation

@Service(value = "footerContentService")
class FooterContentService{

    IFooter[] getContent() {
        getFooterArrayByConvertingFromJson()
    }
    private String getFooterFromAssetsAsJson() {
        new File(jsonLocation).text
    }

    private IFooter[] getFooterArrayByConvertingFromJson() {
        final String fileContents = getFooterFromAssetsAsJson()
        final def fromJson = new JsonSlurper().parseText(fileContents)

        IFooter[] candidate = []
        fromJson.each {
            arrayElement -> candidate += getFooterArrayByConvertingFromJson(arrayElement)
        }
        return candidate
    }

    private IFooter getFooterArrayByConvertingFromJson(Map<String, String> fromJson) {
        final Map<String, String>[] detailsAsArrayOfMaps = fromJson['payload']
        final label = fromJson['label'] as String
        final runtime = fromJson['runtime'] as String[]
        def footer = new Footer(label, runtime)
        def y = detailsAsArrayOfMaps.each { Map<String, String> m -> footer.add(new FooterDetail(m)) }
        return footer
    }
}
