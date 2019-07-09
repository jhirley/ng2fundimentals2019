import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import { NavbarComponent } from '../navbar/navbar.component';
// import { Error404Component } from "../errors/404.component";
// import { ToastrService } from '../common/toastr.service';

import { eventRoutes } from "./events.routes";
import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivatorService,
  EventsListResolver
 } from "./index";



@NgModule({
  declarations: [
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(eventRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // EventService
    {
      provide:'candDeactivateCreateEvent',
      useValue: checkDirtyStates
      }
  ]
})
export class EventModule { }
export function checkDirtyStates(component:CreateEventComponent){
  if (component.isDirty) {
    return window.confirm('You have not saved, do you really want to cancel?');
  }
  return true;
}