import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guitar-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("eventsComponent is HERE");
  }

}
