package com.category.fans.service.bootstrap.repository

import com.category.fans.domain.GuitarCourseSchedule
import com.category.fans.repository.GuitarCourseScheduleRepository
import com.category.fans.service.bootstrap.BootstrapContract
import com.category.fans.service.util.ServiceTool
import groovy.json.JsonSlurper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

import static com.category.fans.controller.ConstantsLocatingJsonContract.classScheduleJsonLocation as jsonLocation

@Component("guitarCoursesBootstrap")
class GuitarCourseScheduleBootstrap implements BootstrapContract {

    @Autowired
    private GuitarCourseScheduleRepository  bootstrapRepository

    private final static def events = getContent()

    boolean spinUp() {
        assert jsonLocation
        def seed = [] << header

        assert seed.addAll( events )

        seed.each { mapIn ->
            def event0 = new GuitarCourseSchedule(mapIn)
            def m0 =  bootstrapRepository.saveAndFlush(event0)
            assert m0.id
        }
        true
    }
    static private Map<String,String>[] getContent() {
        getContentFromAssets()
    }
    static private  String getContentFromAssetsAsJson() {
        getContentFromAssetsResourceExpectingJson()
    }

    static private  String getContentFromFileAsText() {
        new File(jsonLocation).text
    }
    static private  String getContentFromAssetsResourceExpectingJson() {
        ServiceTool.getContentFromClasspathResourceAsJson(jsonLocation)
    }

    static private  def getContentFromAssets() {
        final String fileContents = getContentFromAssetsAsJson()
        final def asJson =  new JsonSlurper().parseText(fileContents) as Map[]
        asJson
    }

    private final static def header = [
                    Year: "Year",
                    Term: "Term",
                    publish: "publish",
                    Status: "Status",
                    CRN: "CRN",
                    Subject: "Subject",
                    Course: "Course",
                    Section: "Section",
                    Credits: "Credits",
                    Title: "Title",
                    Days: "Days",
                    Time: "Time",
                    Dates: "Dates",
                    Location: "Location",
                    MaxSize: "MaxSize",
                    SeatsOpen: "SeatsOpen",
                    MaxWaiting: "MaxWaiting",
                    WaitingOpen: "WaitingOpen",
                    Instructor: "Instructor",
    ]
//
//    private static def formatter = BootstrapContract.MONTH_DATE_YEAR_FORMATTER
//
//    private static compareOnDateField(LinkedHashMap<String, String> a, LinkedHashMap<String, String> b) {
//        LocalDate.parse(a.date, formatter).compareTo(LocalDate.parse(b.date, formatter))
//    }
}
