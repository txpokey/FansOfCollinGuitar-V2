import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guitar-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("newsComponent is HERE");
  }

}
