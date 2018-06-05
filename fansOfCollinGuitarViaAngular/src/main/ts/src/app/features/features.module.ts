import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeaturesRoutingModule} from './features-routing.module';
import {NewsComponent} from './news/news.component';
import {LayoutModule} from '../layout/layout.module';
import {ServicesModule} from "../services/services.module";
import {PipesCommonModule} from '../pipes/pipes-common/pipes-common.module';
import {EventsComponent} from './lists/events/events.component';
import {LinksComponent} from './lists/links/links.component';
import {TextbooksComponent} from './classroom/textbooks/textbooks.component';
import {FacultyComponent} from './classroom/faculty/faculty.component';
import {ClassScheduleModule} from "./classroom/class-schedule/class-schedule.module";

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ServicesModule,
    PipesCommonModule,
    ClassScheduleModule,
    FeaturesRoutingModule

  ],
  declarations: [NewsComponent, EventsComponent, LinksComponent, TextbooksComponent, FacultyComponent],
  exports: [NewsComponent, FeaturesRoutingModule, EventsComponent, LinksComponent, TextbooksComponent, FacultyComponent]
})
export class FeaturesModule { }
