package com.category.fans.service.util

import groovy.util.logging.Slf4j
import org.springframework.core.io.ClassPathResource
import org.springframework.lang.NonNull
import org.springframework.util.FileCopyUtils

import java.nio.charset.StandardCharsets

@Slf4j
class ServiceTool{

    /**
     *
     * @param location classpath relative location for resource
     * @return
     */
    static String getContentFromClasspathResourceAsString(@NonNull String location ) {
        String data = ""
        ClassPathResource cpr = new ClassPathResource(location)
        try {
            byte[] bdata = FileCopyUtils.copyToByteArray(cpr.getInputStream())
            data = new String(bdata, StandardCharsets.UTF_8)
        } catch (IOException e) {
            log.warn("IOException", e)
        }
    }
    static String getContentFromClasspathResourceAsString(@NonNull String[] locations ) {
        String candidate = locations.inject( "" ,
                { seed, location -> seed += getContentFromClasspathResourceAsJson( location )})
        candidate
    }
    static InputStream getContentFromClasspathResourceAsInputStream(@NonNull String location) {
        ClassPathResource cpr = new ClassPathResource(location)
        def candidate = cpr.getInputStream()
        candidate
    }
}
