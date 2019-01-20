package com.category.fans.service.bootstrap.repository

import com.category.fans.domain.CollegeEvent
import com.category.fans.repository.CollegeEventRepository
import com.category.fans.service.bootstrap.BootstrapContract
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

//CollegeEventsBootstrap

import java.time.LocalDate

import static com.category.fans.service.bootstrap.repository.events.CollegeEventsBootstrap2019Spring.header as
BOOTSTRAP_HEADER

import static com.category.fans.service.bootstrap.repository.events.CollegeEventsBootstrap2019Spring.events as
BOOTSTRAP_EVENTS

@Component("collegeEventsBootstrap")
class CollegeEventsBootstrap implements BootstrapContract {

    private static def formatter = BootstrapContract.MONTH_DATE_YEAR_FORMATTER

    @Autowired
    private CollegeEventRepository eventRepository

    boolean spinUp() {
        all.each { mapIn ->
            def event0 = new CollegeEvent(mapIn)
            def m0 = eventRepository.saveAndFlush(event0)
            assert m0.id
        }
        true
    }

    private final static def header = BOOTSTRAP_HEADER
    private final static def events = BOOTSTRAP_EVENTS.sort { a, b-> compareOnDateField(a, b) }

    private static compareOnDateField(LinkedHashMap<String, String> a, LinkedHashMap<String, String> b) {
        LocalDate.parse(a.date, formatter).compareTo(LocalDate.parse(b.date, formatter))
    }
    private final static def all = header + events
}
