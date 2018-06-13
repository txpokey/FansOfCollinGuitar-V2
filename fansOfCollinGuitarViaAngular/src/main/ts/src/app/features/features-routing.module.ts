import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {EventsComponent} from "./lists/events/events.component";
import {LinksComponent} from "./lists/links/links.component";
import {TextbooksComponent} from "./classroom/textbooks/textbooks.component";
import {FacultyComponent} from "./classroom/faculty/faculty.component";
import {ClassSchedulePlannerComponent} from "./classroom/class-schedule/class-schedule-planner/class-schedule-planner.component";
import {PlayListsByChannelComponent} from "./performances/ut/play-lists-by-channel/play-lists-by-channel.component";

const routes: Routes = [
  { path: 'guitarCoursesBySchoolTerm', component: ClassSchedulePlannerComponent },
  { path: 'guitarEvents', component: EventsComponent },
  { path: 'guitarFaculty', component: FacultyComponent },
  { path: 'guitarLinks', component: LinksComponent },
  { path: 'guitarNews', component: NewsComponent },
  { path: 'guitarPerformances', component: PlayListsByChannelComponent },
  { path: 'guitarTextbooks', component: TextbooksComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
