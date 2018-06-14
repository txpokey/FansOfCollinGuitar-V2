import {Component, OnInit} from '@angular/core';
import {IGuitarFaculty} from "./GuitarFaculty";
import {
  FileAsSourceForJsonService, GuitarApiObserver, GuitarApiObserverContract,
  GuitarApiObserverPollingContract
} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {TabStateComponent} from "../../../services/tab-state/tab-state.component";
import {IncludeTemplateComponent} from "../../../services/include-template/include-template.component";
import {HttpClient} from "@angular/common/http";

const setupUri  = "/assets/json/teacherBiography-controller.json" ;

@Component({
  selector: 'guitar-faculty',
  templateUrl: './faculty.component.html',
  providers: [FileAsSourceForJsonService,TabStateComponent, IncludeTemplateComponent],
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit, GuitarApiObserverPollingContract {
  guitarDepartmentFaculty: IGuitarFaculty ;
  lookupAgent : GuitarApiObserverContract ;

  constructor(public teacherTab: TabStateComponent, private service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    let clientStub  : HttpClient = this.service.getHttpClient() ;
    let agent : GuitarApiObserverContract  = new GuitarApiObserver( setupUri , clientStub ) ;
    this.lookupAgent = agent ;
    let spun:  boolean = agent.spinUp() ;
    console.log("textbooksComponent is HERE:> " + spun );
  }

  // ngOnInit0() {
  //   let myAny: any  = this.service.getFacultySetUp() ;
  //   this.guitarDepartmentFaculty = myAny ;
  //   console.log("facultyComponent is HERE:> " + myAny );
  // }

  isReady() : boolean {
    let ret : boolean = false ;
    if( this.lookupAgent.isReady() ) {
      let candidate : any = this.lookupAgent.getPayload() ;
      this.guitarDepartmentFaculty = candidate ;
      ret = true ;
    }
    return ret ;
  }
}
