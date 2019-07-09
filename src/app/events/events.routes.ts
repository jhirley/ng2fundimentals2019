import { 
    EventsListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventsListResolver,
    EventRouteActivatorService } from "./index";


export const eventRoutes = [

    {path: 'new', component: CreateEventComponent, canDeactivate:['candDeactivateCreateEvent']},
    {path: ':id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},
    {path: '', component: EventsListComponent, resolve: {events: EventsListResolver}},

];