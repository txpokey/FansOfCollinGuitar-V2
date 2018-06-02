import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'guitar-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() targets: any[] ;

  constructor() { }

  ngOnInit() {
  }

}
