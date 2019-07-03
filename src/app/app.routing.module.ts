import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from "./errors/404.component";

import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventsListResolver } from './events/events-list/events-list-resolver.service';


const routes: Routes = [
  {path: '404', component: Error404Component},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
  {path: 'events/new', component: CreateEventComponent, canDeactivate:['candDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},

  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: '**', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{
  provide:'candDeactivateCreateEvent',
  useValue: checkDirtyStates
  }]
})
export class AppRoutingModule { }
export function checkDirtyStates(component:CreateEventComponent){
  if (component.isDirty) {
    return window.confirm('You have not saved, do you really want to cancel?');
  }
  return true;
}
