package com.category.fans.controller

import org.junit.Rule
import org.junit.rules.TestName
import spock.lang.Specification

class HeaderControllerTest extends Specification{

    final String title = "Fan Club: Collin College Guitar Studies"

    @Rule TestName name

    def "ServiceMock"() {
        println "entering '$name.methodName'"
        HeaderController hc = new HeaderController()
        def whatAmI = hc.serviceMock()
        expect:
        whatAmI != null
        title == whatAmI.title
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
}
