package com.category.fans.service.util

import com.category.fans.domain.CollegeEvent
import com.category.fans.repository.CollegeEventRepository
import groovy.util.logging.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

@Slf4j
@Repository
@Service("bootstrapTool")
class BootstrapDataService {
//    @PersistenceContext
//    private EntityManager entityManager

    @Autowired
    private CollegeEventRepository eventRepository

    boolean spinUp() {
        a.each { mapIn ->
            def event0 = new CollegeEvent(mapIn)
            def m0 = eventRepository.saveAndFlush(event0)
            assert m0.id
        }
        true
    }
    final static def a = [
        [ name : "name" ,
          date : "date" ,
          time : "time" ,
          event : "event" ,
          venue : "venue"
        ] ,
        [ name : "name" ,
          date : "date" ,
          time : "time" ,
          event : "event" ,
          venue : "venue"
        ] ,
    ]
}
