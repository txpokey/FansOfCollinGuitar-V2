package com.category.fans.service.util

import com.category.fans.domain.CollegeEvent
import com.category.fans.repository.CollegeEventRepository
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@Slf4j
@Repository
@Service("bootstrapTool")
class BootstrapDataService {
//    @PersistenceContext
//    private EntityManager entityManager

    @Autowired
    private CollegeEventRepository eventRepository

    boolean spinUp() {
        def event0 = new CollegeEvent()
        event0.name = "name"
        event0.date = "date"
        event0.time = "time"
        event0.event = "event"
        event0.venue = "venue"
        def m = eventRepository.saveAndFlush(event0)
        assert m.id
        true
    }
}
