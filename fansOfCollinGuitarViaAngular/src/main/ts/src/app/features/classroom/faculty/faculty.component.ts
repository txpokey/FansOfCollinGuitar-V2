import {Component, OnInit} from '@angular/core';
import {IGuitarFaculty} from "./GuitarFaculty";
import {FileAsSourceForJsonService} from "../../../services/file-as-source-for-json/file-as-source-for-json.service";
import {TabStateComponent} from "../../../services/tab-state/tab-state.component";
import {IncludeTemplateComponent} from "../../../services/include-template/include-template.component";

@Component({
  selector: 'guitar-faculty',
  templateUrl: './faculty.component.html',
  providers: [FileAsSourceForJsonService,TabStateComponent, IncludeTemplateComponent],
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  guitarDepartmentFaculty: IGuitarFaculty ;

  constructor(public teacherTab: TabStateComponent, private service: FileAsSourceForJsonService ) { }

  ngOnInit() {
    let myAny: any  = this.service.getFacultySetUp() ;
    this.guitarDepartmentFaculty = myAny ;
    console.log("facultyComponent is HERE:> " + myAny );
  }

}
