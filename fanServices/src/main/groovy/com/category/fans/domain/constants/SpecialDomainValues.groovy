package com.category.fans.domain.constants

import com.category.fans.domain.GuitarCourseSchedule

class SpecialDomainValues{
    final static GUITAR_SECTION_HEADER_FOR_DISPLAY_COLUMNS = [
            year: "Year",
            term: "Term",
            publish: "publish",
            status: "Status",
            crn: "CRN",
            subject: "Subject",
            course: "Course",
            section: "Section",
            credits: "Credits",
            title: "Title",
            days: "Days",
            time: "Time",
            dates: "Dates",
            location: "Location",
            maxSize: "MaxSize",
            seatsOpen: "SeatsOpen",
            maxWaiting: "MaxWaiting",
            waitingOpen: "WaitingOpen",
            instructor: "Instructor"
    ]
    final static GUITAR_SECTION_HEADER = [ new GuitarCourseSchedule(GUITAR_SECTION_HEADER_FOR_DISPLAY_COLUMNS) ]
}
