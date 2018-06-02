import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'guitar-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() carouselSlideDeck: number[] ;
  constructor() { }

  ngOnInit() {
    console.log("carouselSlideDeck:carousel.onInit> " + this.carouselSlideDeck);
  }

}
