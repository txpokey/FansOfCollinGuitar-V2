import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileAsSourceForJsonService} from "./file-as-source-for-json.service";
import { TabStateComponent } from './tab-state/tab-state.component';
import {FilterByObjectPipe} from "./filter-by-object/filter-by-object.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileAsSourceForJsonService, TabStateComponent, FilterByObjectPipe],
  exports: [TabStateComponent]
})
export class ServicesModule { }
