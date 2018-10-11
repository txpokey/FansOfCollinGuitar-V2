import {Component, Input} from '@angular/core';
import {
    FileAsSourceForJsonService,
    GuitarApiComponentBaseClass,
    GuitarApiObserver,
    GuitarApiObserverContract,
    GuitarApiObserverPollingContract
} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {ICourseScheduleEntries} from "../constants/ClassScheduleContracts";
import {ConstantsContract} from "../../../../services/constants/ConstantsContract";
import {HttpClient} from "@angular/common/http";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IYouTubeVideosByPlaylistQueryResponse} from "../../../performances/ut/YouTubePlayListClientServiceContracts";

const setupUri  = ConstantsContract.SpringbootBaseUrl + "/fans/classes/search" ;

@Component({
  selector: 'course-schedule-entry',
  templateUrl: './course-schedule-entry.component.html',
  styleUrls: ['./course-schedule-entry.component.css']
})
export class CourseScheduleEntryComponent extends GuitarApiComponentBaseClass<ICourseScheduleEntries[]> implements GuitarApiObserverPollingContract {

    @Input() selectedTerm: any;
    @Input() selectedCourse: any;
    courseBySections: ICourseScheduleEntries[];

    constructor(private service: FileAsSourceForJsonService, private modalService: NgbModal) {
        super(setupUri, service.getHttpClient());
    }
    /**
     * selectedCourse is not in scope during constructor, so need to override ngOnInit() so that we can
     * pass in that variable as a GET parameter on the http client request set up in the abstract base class
     */
    ngOnInit() {
        let clientStub  : HttpClient = super.getHttpClient() ;
        let specialUrl = setupUri + "?bySchoolTerm=" + this.selectedTerm + "&byCourseTitle="  + this.selectedCourse  ;
        let agent : GuitarApiObserverContract  = new GuitarApiObserver<IYouTubeVideosByPlaylistQueryResponse[]>(specialUrl , clientStub ) ;
        super.setNetworker(agent) ;
        let spun:  boolean = agent.spinUp() ;
        console.log("CourseScheduleEntryComponent.ngOnInit: spinup is HERE:uri> " + specialUrl + "\nspinup is" +
            " HERE:spun> " + spun );
    }
    isReady() : boolean {
        let ret : boolean = false ;
        if(this.getNetworker().isReady() ) {
            let candidate : any = this.getNetworker().getPayload() ;
            this.courseBySections = this.processIncomingPayload( candidate ) ;
            console.log("check on coursesDiscovered:> " + JSON.stringify(candidate));
            ret = true ;
        }
        return ret ;
    }
    processIncomingPayload( incomingPayload : any ) : any[] {
        let pick0 : any = incomingPayload[0].payload ;
        return pick0 ;
    }
}

