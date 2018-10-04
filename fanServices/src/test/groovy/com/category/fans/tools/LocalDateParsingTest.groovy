package com.category.fans.tools

import groovy.util.logging.Slf4j
import org.testng.annotations.Test

import java.time.LocalDate
import java.time.format.DateTimeFormatter

@Slf4j
@Test
class LocalDateParsingTest{
    final static def formatter = DateTimeFormatter.ofPattern("M/d/yyyy" )

    void whatIsCorrect(){
        def d = "8/31/2018"
        def ld = LocalDate.parse(d,formatter)
        ld
    }
}
