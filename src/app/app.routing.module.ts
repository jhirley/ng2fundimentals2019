import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from "./errors/404.component";

import { 
//   EventsListComponent,
//   EventDetailsComponent,
  CreateEventComponent,
//   EventRouteActivatorService,
//   EventsListResolver
 } from "./events/index";

const routes: Routes = [
  {path: '404', component: Error404Component},


  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'events', loadChildren: './events/events.module#EventModule'},
  {path: '**', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }

