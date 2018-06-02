import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileAsSourceForJsonService} from "./file-as-source-for-json.service";
import { TabStateComponent } from './tab-state/tab-state.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileAsSourceForJsonService, TabStateComponent],
  exports: [TabStateComponent]
})
export class ServicesModule { }
