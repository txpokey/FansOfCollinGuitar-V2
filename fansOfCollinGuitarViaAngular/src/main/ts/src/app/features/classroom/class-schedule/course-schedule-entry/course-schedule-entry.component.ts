import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'course-schedule-entry',
  templateUrl: './course-schedule-entry.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course-schedule-entry.component.css']
})
export class CourseScheduleEntryComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }
  closeResult: string;


  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
