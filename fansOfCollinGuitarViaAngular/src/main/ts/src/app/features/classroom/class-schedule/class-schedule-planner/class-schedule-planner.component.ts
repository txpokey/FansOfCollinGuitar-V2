import {ConstantsContract} from "../../../../services/constants/ConstantsContract";
import {
    FileAsSourceForJsonService,
    GuitarApiComponentBaseClass,
    GuitarApiObserverPollingContract
} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {Component} from "@angular/core";
import {NgbAccordionConfig} from "@ng-bootstrap/ng-bootstrap";
import {ICourseCatalogEntries} from "../constants/ClassScheduleContracts";

const setupUri  = ConstantsContract.SpringbootBaseUrl + "/fans/classes/musicCatalog" ;

@Component({
    selector: 'class-schedule-planner',
    templateUrl: './class-schedule-planner.component.html',
    providers: [NgbAccordionConfig],
    styleUrls: ['./class-schedule-planner.component.css']
})
export class ClassSchedulePlannerComponent extends GuitarApiComponentBaseClass<ICourseCatalogEntries[]> implements GuitarApiObserverPollingContract {

    musicCatalogContent: ICourseCatalogEntries[] ;
    constructor( private service: FileAsSourceForJsonService ) { super( setupUri , service.getHttpClient() ) ;}

    isReady() : boolean {
        let ret : boolean = false ;
        if(this.getNetworker().isReady() ) {
            let candidate : any = this.getNetworker().getPayload() ;
            this.musicCatalogContent = candidate ;
            console.log("check on musicCatalog:> " + JSON.stringify(candidate));
            ret = true ;
        }
        return ret ;
    }

}