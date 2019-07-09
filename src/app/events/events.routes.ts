import { 
    EventsListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    EventsListResolver,
    EventRouteActivatorService } from "./index";


export const eventRoutes = [
    {path: 'session/new', component: CreateSessionComponent, canDeactivate:['candDeactivateCreateEvent']},
    {path: 'new', component: CreateEventComponent, canDeactivate:['candDeactivateCreateEvent']},
    {path: ':id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},
    {path: '', component: EventsListComponent, resolve: {events: EventsListResolver}},

];