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
    static String getContentFromClasspathResourceAsJson(@NonNull String location ) {
        String data = ""
        ClassPathResource cpr = new ClassPathResource(location)
        try {
            byte[] bdata = FileCopyUtils.copyToByteArray(cpr.getInputStream())
            data = new String(bdata, StandardCharsets.UTF_8)
        } catch (IOException e) {
            log.warn("IOException", e)
        }
    }
}
