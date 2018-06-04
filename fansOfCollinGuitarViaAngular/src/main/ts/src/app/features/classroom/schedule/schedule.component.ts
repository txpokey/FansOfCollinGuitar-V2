import { Component, OnInit } from '@angular/core';
import {FileAsSourceForJsonService} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {IGuitarProgramSchedule, IMusicDeptCatalog} from "./GuitarClassSchedule";

@Component({
  selector: 'guitar-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  musicDeptCatalog : IMusicDeptCatalog ;
  guitarProgramSchedule : IGuitarProgramSchedule ;

  constructor(private service: FileAsSourceForJsonService) {  }

  ngOnInit() {
    let myAny: any  = this.service.getMusicDeptCatalog() ;
    this.musicDeptCatalog = myAny ;
    myAny  = this.service.getGuitarProgramSchedule() ;
    this.guitarProgramSchedule = myAny ;
    console.log("scheduleComponent is HERE:> " + myAny );
  }

}
