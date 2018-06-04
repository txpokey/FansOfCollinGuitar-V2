import { Component, OnInit } from '@angular/core';
import {FileAsSourceForJsonService} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {IGuitarEvent} from "./GuitarEvent";

@Component({
  selector: 'guitar-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  guitarProgramEvents: IGuitarEvent[] ;
  constructor(private service: FileAsSourceForJsonService) {  }

  ngOnInit() {
    let myAny: any  = this.service.getEventsSetUp() ;
    this.guitarProgramEvents = myAny ;
    console.log("eventsComponent is HERE:> " + myAny );
  }

}
