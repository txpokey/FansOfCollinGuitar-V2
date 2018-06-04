import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import {EventsComponent} from "./lists/events/events.component";
import {LinksComponent} from "./lists/links/links.component";

const routes: Routes = [
  { path: 'guitarNews', component: NewsComponent },
  { path: 'guitarLinks', component: LinksComponent },
  { path: 'guitarEvents', component: EventsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
