import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { NavbarComponent } from './navbar/navbar.component';

import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from "./errors/404.component";

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
// import { appRoutes } from "../routes";

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
    EventRouteActivatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
