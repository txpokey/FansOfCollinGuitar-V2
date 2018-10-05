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

    String Year
    String Term
    String publish
    String Status
    String CRN
    String Subject
    String Course
    String Section
    String Credits
    String Title
    String Days
    String Time
    String Dates
    String Location
    String MaxSize
    String SeatsOpen
    String MaxWaiting
    String WaitingOpen
    String Instructor

}
