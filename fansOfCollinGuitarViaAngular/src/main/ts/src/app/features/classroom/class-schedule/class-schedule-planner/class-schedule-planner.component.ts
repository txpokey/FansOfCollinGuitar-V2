import {Component, OnInit} from '@angular/core';
import {IGuitarProgramCourseScheduleByTerm, IMusicDeptCatalogByTerm} from "../GuitarClassSchedulePlanner";
import {FileAsSourceForJsonService} from "../../../../services/file-as-source-for-json/file-as-source-for-json.service";


@Component({
  selector: 'class-schedule-planner',
  templateUrl: './class-schedule-planner.component.html',
  styleUrls: ['./class-schedule-planner.component.css']
})
export class ClassSchedulePlannerComponent implements OnInit {
  musicDeptCatalog : IMusicDeptCatalogByTerm[] ;
  guitarProgramSchedule : IGuitarProgramCourseScheduleByTerm[] ;
  constructor(private service: FileAsSourceForJsonService) {  }

  ngOnInit() {
    let myAny: any  = this.service.getMusicDeptCatalog() ;
    this.musicDeptCatalog = myAny ;
    myAny  = this.service.getGuitarProgramCourseSchedule() ;
    this.guitarProgramSchedule = myAny ;
    console.log("scheduleComponent is HERE:> " + myAny );
  }

}
