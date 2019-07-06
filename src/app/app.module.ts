import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivatorService,
  EventsListResolver
 } from "./events/index";

import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from "./errors/404.component";
import { ToastrService } from './common/toastr.service';

import { AuthService } from "./user/index";

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    EventsListComponent, 
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventsListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
