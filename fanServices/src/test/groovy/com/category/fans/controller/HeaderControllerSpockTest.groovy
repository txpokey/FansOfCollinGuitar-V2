package com.category.fans.controller

import org.junit.Rule
import org.junit.rules.TestName
import spock.lang.Specification

class HeaderControllerSpockTest extends Specification{


    @Rule TestName header

    def "getHeader smoke test"() {
        when:
            println "entering '$header.methodName'"
         HeaderController hc = new HeaderController(constructHeaderTestData())
            def whatAmI = hc.getHeader()
            def whatAmIGroovy = hc.header
        then:
            whatAmI != null
            whatAmI == whatAmIGroovy
        with(whatAmI) {
            titleTestData == title
            null != targets
            1 == targets.size()
            targets[0].label
            targets[0].url
        }

    }
    def "length of Spock's and his friends' names"() {
        expect:
        name.size() == length

        where:
        name     | length
        "Spock"  | 5
        "Kirk"   | 4
        "Scotty" | 6
    }

    IHeaderConfig constructHeaderTestData() {
        new Header( titleTestData ,constructHeaderDetailsTestData())
    }

    IHeaderConfigDetail[] constructHeaderDetailsTestData() {
        [new HeaderDetail("myLabel" , "angular.io")]
    }
    final String titleTestData = "Fan Club: Collin College Guitar Studies"

}
