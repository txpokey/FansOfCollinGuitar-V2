import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListComponent } from './ut/play-list/play-list.component';
import { PlayListsByChannelComponent } from './ut/play-lists-by-channel/play-lists-by-channel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PlayListComponent, PlayListsByChannelComponent],
  exports: [PlayListComponent, PlayListsByChannelComponent]
})
export class PerformancesModule { }
