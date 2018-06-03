import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterByObjectPipe} from "./filter-by-object.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterByObjectPipe],
  exports: [FilterByObjectPipe]

})
export class PipesCommonModule { }
