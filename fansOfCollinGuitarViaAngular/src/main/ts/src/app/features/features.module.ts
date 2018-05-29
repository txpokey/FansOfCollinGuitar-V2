import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { NewsComponent } from './news/news.component';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  declarations: [NewsComponent],
  exports: [NewsComponent, FeaturesRoutingModule]
})
export class FeaturesModule { }
