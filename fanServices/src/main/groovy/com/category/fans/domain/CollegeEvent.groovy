package com.category.fans.domain


import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class CollegeEvent{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id

    String name
    String date
    String time
    String room
    String event
}
//    "name": "2018 Spring Guitar Events at Collin College",
//    "date": "Date",
//    "time": "Time",
//    "where": "Location/Room",
//    "event": "Events"