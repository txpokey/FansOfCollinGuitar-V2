import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileAsSourceForJsonComponent } from './file-as-source-for-json/file-as-source-for-json.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileAsSourceForJsonComponent],
  exports: [FileAsSourceForJsonComponent]
})
export class ServicesModule { }
