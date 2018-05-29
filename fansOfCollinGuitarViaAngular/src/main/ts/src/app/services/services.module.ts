import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileAsSourceForJsonService} from "./file-as-source-for-json.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileAsSourceForJsonService],
  exports: []
})
export class ServicesModule { }
