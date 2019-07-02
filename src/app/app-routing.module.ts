import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsListComponent } from '../app/events/events-list/events-list.component';
import { EventDetailsComponent } from '../app/events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from "./errors/404.component";

import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";


const routes: Routes = [
  {path: '404', component: Error404Component},
  {path: 'events', component: EventsListComponent},
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},

  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: '**', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
