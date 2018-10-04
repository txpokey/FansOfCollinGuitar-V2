package com.category.fans.service.bootstrap

import com.category.fans.service.bootstrap.repository.CollegeEventsBootstrap
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.context.annotation.ComponentScan
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

import javax.annotation.PostConstruct
import java.time.format.DateTimeFormatter

interface BootstrapContract {
    final static def MONTH_DATE_YEAR_FORMATTER = DateTimeFormatter.ofPattern("M/d/yyyy" )
    boolean spinUp()
}

@Slf4j
@Repository
@Service("bootstrapTool")
class BootstrapDataService implements BootstrapContract {

    @Autowired
    @Qualifier("collegeEventsBootstrap")
    CollegeEventsBootstrap collegeEventsBootstrap

//    private final def bootstrapingList = [ collegeEventsBootstrap ]
//    @PostConstruct
    boolean spinUp() {
        final def bootstrapingList = [ collegeEventsBootstrap ]

        bootstrapingList.each { member ->
            def result = member.spinUp()
            assert result
        }
        true
    }


}

//].sort {a,b-> a.date <=> b.date }
