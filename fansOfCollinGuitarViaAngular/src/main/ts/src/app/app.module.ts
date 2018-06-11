import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {FeaturesModule} from './features/features.module';
import {LayoutModule} from './layout/layout.module';
import {HttpClientModule} from "@angular/common/http";
import {ServicesModule} from "./services/services.module";
import {PipesCommonModule} from "./pipes/pipes-common/pipes-common.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FeaturesModule,
    LayoutModule,
    HttpClientModule,
    ServicesModule,
    PipesCommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
