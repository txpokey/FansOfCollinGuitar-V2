package com.category.fans.controller

interface ConstantsContract{


}

interface ConstantsLocatingJsonContract{

    String headerJsonLocation = "/assets/json/header-controller.json"
    String footerJsonLocation = "/assets/json/footer-controller.json"

}
interface CrossOriginContract{
    String CROSS_SITE_ORIGIN = CROSS_SITE_ORIGIN_NG_SERVE
    String CROSS_SITE_ORIGIN_NG_SERVE = "http://localhost:4200"
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
        final HeaderController headerController = new HeaderController()
        final FooterController footerController = new FooterController()
        final candidate = [
                headerController ,
                footerController
        ]
    }
}