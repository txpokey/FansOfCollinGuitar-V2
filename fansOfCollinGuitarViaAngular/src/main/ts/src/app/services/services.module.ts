import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabStateComponent} from './tab-state/tab-state.component';
import {FilterByObjectPipe} from "./filter-by-object/filter-by-object.pipe";
import {IncludeTemplateComponent} from './include-template/include-template.component';

@NgModule({
  imports: [
    CommonModule
  ],
  // declarations: [FileAsSourceForJsonService, TabStateComponent, FilterByObjectPipe, IncludeTemplateComponent],
  declarations: [TabStateComponent, FilterByObjectPipe, IncludeTemplateComponent],
  exports: [TabStateComponent, IncludeTemplateComponent, FilterByObjectPipe]
})
export class ServicesModule { }
