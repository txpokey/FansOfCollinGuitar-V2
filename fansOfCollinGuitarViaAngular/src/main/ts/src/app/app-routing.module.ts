import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'welcome', redirectTo: 'guitarNews', pathMatch: 'full' },
  { path: '', redirectTo: 'guitarNews', pathMatch: 'full' },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
