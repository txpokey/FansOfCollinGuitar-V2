import {Component, Input} from '@angular/core';
import {
    FileAsSourceForJsonService,
    GuitarApiComponentBaseClass, GuitarApiObserver, GuitarApiObserverContract,
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
     * pass in that variable as a GET parameter on the http clien request set up in the abstract base class
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
            this.courseBySections = candidate[0].payload ;
            console.log("check on coursesDiscovered:> " + JSON.stringify(candidate));
            ret = true ;
        }
        return ret ;
    }
    // openBackDropCustomClass(courseSection, content) {
    //     this.courseSection = courseSection;
    //     this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    // }
  // let guitarKey = {
  //   schoolSemester: obj.schoolSemester,
  //   schoolYear: obj.schoolYear,
  //   discipline: pay.Subj,
  //   course: pay.Crse
  // };
  // findClassSectionsByKey( key: any ) : any[] {
  //   let headersForDisplayColumns = [ { pay: this.provideHeadersForDisplayColumns() } ] ;
  //   // let contentArray = this.planner.findClassesFromGuitarProgramScheduleBySchoolTermAsArray( key ) ;
  //   let contentArray = null ; // STUBBED for compile
  //   let candidate = [] ;
  //
  //   candidate.push(...headersForDisplayColumns);
  //   candidate.push(...contentArray);
  //   return candidate ;
  // }
  //
  // private processInputKey( guitarCourse: any, guitarCourseKey : any ) : void {
  //   this.discipline = guitarCourseKey.discipline ;
  //   this.semester = guitarCourseKey.semester ;
  //   this.year = guitarCourseKey.year ;
  //   this.course = guitarCourse.class ;
  //   this.className = guitarCourseKey.name ;
  // }
  // private provideHeadersForDisplayColumns() : any {
  //   return HEADERS_FOR_DISPLAY_COLUMNS ;
  // }
}
 const HEADERS_FOR_DISPLAY_COLUMNS = {
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
     instructor: "Instructor",
} ;
