import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from "./errors/404.component";

import { 
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventsListResolver
 } from "./events/index";

const routes: Routes = [
  {path: '404', component: Error404Component},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
  {path: 'events/new', component: CreateEventComponent, canDeactivate:['candDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},

  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
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
