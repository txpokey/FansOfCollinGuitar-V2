import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabStateComponent} from './tab-state/tab-state.component';
import {IncludeTemplateComponent} from './include-template/include-template.component';

@NgModule({
  imports: [
    CommonModule
  ],
  // declarations: [FileAsSourceForJsonService, TabStateComponent, FilterByObjectPipe, IncludeTemplateComponent],
  // declarations: [TabStateComponent, FilterByObjectPipe, IncludeTemplateComponent],
  declarations: [TabStateComponent, IncludeTemplateComponent],
  // exports: [TabStateComponent, IncludeTemplateComponent, FilterByObjectPipe]
  exports: [TabStateComponent, IncludeTemplateComponent]
})
export class ServicesModule { }
