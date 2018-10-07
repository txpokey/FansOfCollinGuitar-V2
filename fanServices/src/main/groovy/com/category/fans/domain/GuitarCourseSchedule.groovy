package com.category.fans.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity

class GuitarCourseSchedule{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id

    String year
    String term
    String publish
    String status
    String crn
    String subject
    String course
    String section
    String credits
    String title
    String days
    String time
    String dates
    String location
    String maxSize
    String seatsOpen
    String maxWaiting
    String waitingOpen
    String instructor

}
