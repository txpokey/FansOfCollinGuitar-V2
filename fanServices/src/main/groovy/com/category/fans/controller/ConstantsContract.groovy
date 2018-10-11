package com.category.fans.controller

interface ConstantsContract {}

interface ConstantsLocatingJsonContract{

    String headerJsonLocation = "/META-INF/resources/assets/json/header-controller.json"
    String footerJsonLocation = "/META-INF/resources/assets/json/footer-controller.json"
    String classScheduleJsonLocation =
            "/META-INF/resources/assets/json/courseWareByRepository/2018/fall/edu.collin.schedule.json"

}
interface CrossOriginContract{
    String[] getRoutesNeededForCrossOriginRegistry()
}
class Constants {
    static String CROSS_SITE_ORIGIN_NG_SERVE = "http://localhost:8082"  // TODO: replace hardcoded URL
    static String CROSS_SITE_ORIGIN_PROD_SERVE = "http://localhost:80"  // TODO: replace hardcoded URL
    static String CROSS_SITE_ORIGIN_DEV_ALT = "http://localhost:8081"  // TODO: replace hardcoded URL
    static String CROSS_SITE_ORIGIN_DOCKER_ALT = "http://localhost:9081"  // TODO: replace hardcoded URL
    static String[] CROSS_SITE_ORIGIN_LIST = [
        CROSS_SITE_ORIGIN_NG_SERVE ,
        CROSS_SITE_ORIGIN_PROD_SERVE ,
        CROSS_SITE_ORIGIN_DEV_ALT ,
        CROSS_SITE_ORIGIN_DOCKER_ALT ,
    ]

    static String[] getRoutesNeededForCrossOriginRegistry() {

        final CrossOriginContract[] controllers = getControllersNeededForCrossOriginRegistry()
        String[] candidate = []

        controllers.each {
            controller -> candidate += controller.getRoutesNeededForCrossOriginRegistry()
        }
        return candidate
    }
    static private CrossOriginContract[] getControllersNeededForCrossOriginRegistry() {
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
        candidate
    }
}