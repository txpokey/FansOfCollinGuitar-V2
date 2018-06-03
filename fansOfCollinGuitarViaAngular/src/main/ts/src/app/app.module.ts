import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {FeaturesModule} from './features/features.module';
import {LayoutModule} from './layout/layout.module';
import {HttpClientModule} from "@angular/common/http";
import {ServicesModule} from "./services/services.module";
import {FilterByObjectPipe} from "./services/filter-by-object/filter-by-object.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FilterByObjectPipe,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    LayoutModule,
    HttpClientModule,
    ServicesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
