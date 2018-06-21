package com.category.fans.controller

interface ConstantsContract{

    String headerJsonLocation = "/home/mak/var/work/project/punisher/edu.collin/dev.collin/angularFanClub/fanServices/src/main/resources/assets/json/header-controller.json"
    String footerJsonLocation = "/home/mak/var/work/project/punisher/edu.collin/dev.collin/angularFanClub/fanServices/src/main/resources/assets/json/footer-controller.json"

}
interface CrossOriginContract{
    String CROSS_SITE_ORIGIN = CROSS_SITE_ORIGIN_NG_SERVE
    String CROSS_SITE_ORIGIN_NG_SERVE = "http://localhost:4200"
    String[] getRoutesNeededForCrossOriginRegistry()
}
class Constants implements CrossOriginContract {

    String[] getRoutesNeededForCrossOriginRegistry() {
        final CrossOriginContract[] controllers = getControllersNeededForCrossOriginRegistry()
        String[] candidate = []

        controllers.each {
            controller -> candidate += controller.getRoutesNeededForCrossOriginRegistry()
        }
        return candidate
    }
    private CrossOriginContract[] getControllersNeededForCrossOriginRegistry() {
        final HeaderController headerController = new HeaderController()
        final FooterController footerController = new FooterController()
        final candidate = [
                headerController ,
                footerController
        ]
    }
}