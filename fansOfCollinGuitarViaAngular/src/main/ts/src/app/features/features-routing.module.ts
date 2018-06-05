import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {EventsComponent} from "./lists/events/events.component";
import {LinksComponent} from "./lists/links/links.component";
import {TextbooksComponent} from "./classroom/textbooks/textbooks.component";
import {FacultyComponent} from "./classroom/faculty/faculty.component";
import {ClassSchedulePlannerComponent} from "./classroom/class-schedule/class-schedule-planner/class-schedule-planner.component";

const routes: Routes = [
  { path: 'guitarEvents', component: EventsComponent },
  { path: 'guitarFaculty', component: FacultyComponent },
  { path: 'guitarLinks', component: LinksComponent },
  { path: 'guitarNews', component: NewsComponent },
  { path: 'guitarCoursesBySchoolTerm', component: ClassSchedulePlannerComponent },
  { path: 'guitarTextbooks', component: TextbooksComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
