package com.category.fans.controller

interface ConstantsContract {}

interface ConstantsLocatingJsonContract{

    String headerJsonLocation = "/META-INF/resources/assets/json/header-controller.json"
    String footerJsonLocation = "/META-INF/resources/assets/json/footer-controller.json"
    String classScheduleJsonLocation =
            "/META-INF/resources/assets/json/courseWareByRepository/2018/fall/edu.collin.schedule.json"

}
interface CrossOriginContract{
    String CROSS_SITE_ORIGIN = CROSS_SITE_ORIGIN_NG_SERVE
    String CROSS_SITE_ORIGIN_NG_SERVE = "http://localhost:4200"  // TODO: replace hardcoded URL
    String[] getRoutesNeededForCrossOriginRegistry()
}
class Constants implements CrossOriginContract {

    String[] getRoutesNeededForCrossOriginRegistry() { // TODO : why cant this be static?
        final CrossOriginContract[] controllers = getControllersNeededForCrossOriginRegistry()
        String[] candidate = []

        controllers.each {
            controller -> candidate += controller.getRoutesNeededForCrossOriginRegistry()
        }
        return candidate
    }
    private CrossOriginContract[] getControllersNeededForCrossOriginRegistry() {
        final HomeController homeController = new HomeController()
        final HeaderController headerController = new HeaderController()
        final FooterController footerController = new FooterController()
        final GuitarCourseScheduleController guitarCourseScheduleController = new GuitarCourseScheduleController()
        final PerformanceVideoController videoController = new PerformanceVideoController()
        final candidate = [
                homeController ,
                headerController ,
                footerController ,
                guitarCourseScheduleController ,
                videoController
        ]
    }
}