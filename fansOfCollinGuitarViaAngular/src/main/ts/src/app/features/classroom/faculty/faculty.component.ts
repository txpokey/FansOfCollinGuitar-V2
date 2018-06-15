import {Component, OnInit} from '@angular/core';
import {IGuitarFaculty} from "./GuitarFaculty";
import {
  FileAsSourceForJsonService, GuitarApiComponentBaseClass, GuitarApiObserver, GuitarApiObserverContract,
  GuitarApiObserverPollingContract
} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {TabStateComponent} from "../../../services/tab-state/tab-state.component";
import {IncludeTemplateComponent} from "../../../services/include-template/include-template.component";
import {HttpClient} from "@angular/common/http";
import {IHeaderConfig} from "../../../layout/header/HeaderConfig";

const setupUri  = "/assets/json/teacherBiography-controller.json" ;

@Component({
  selector: 'guitar-faculty',
  templateUrl: './faculty.component.html',
  providers: [FileAsSourceForJsonService,TabStateComponent, IncludeTemplateComponent],
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent extends GuitarApiComponentBaseClass<IGuitarFaculty> implements GuitarApiObserverPollingContract {
  guitarDepartmentFaculty: IGuitarFaculty ;

  constructor(public teacherTab: TabStateComponent, private service: FileAsSourceForJsonService ) { super( setupUri , service.getHttpClient() ) ;}

  isReady(): boolean {
    let ret : boolean = false ;
    if(this.getNetworker().isReady() ) {
      let candidate : any = this.getNetworker().getPayload() ;
      this.guitarDepartmentFaculty = candidate ;
      ret = true ;
    }
    return ret ;
  }

  // ngOnInit() {
  //   let clientStub  : HttpClient = this.service.getHttpClient() ;
  //   let agent : GuitarApiObserverContract  = new GuitarApiObserver( setupUri , clientStub ) ;
  //   this.lookupAgent = agent ;
  //   let spun:  boolean = agent.spinUp() ;
  //   console.log("spinup is HERE:> " + spun );
  // }

}
