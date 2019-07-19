import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { EventService } from "../shared/event.service";
import { IEvent, ISession } from "../shared/index";
import { throwError } from 'rxjs';

@Component({
    templateUrl:'./event-details.component.html',
    styles:[`
        .container{padding-left:20px; padding-right :20px;}
        .event-image{height: 100px}
        a {cursor: pointer}
    `]

})

export class EventDetailsComponent{

    constructor( private eventService: EventService, private route: ActivatedRoute){}

    event: IEvent;
    addMode: Boolean;
    filterBy:string = 'all';
    sortBy:string = 'name';

    ngOnInit(){
        // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
        // console.log(this.event);
        this.route.params.forEach((params : Params) => {
            this.event = this.eventService.getEvent(+params['id']);
            this.addMode = false;
            this.filterBy = 'all';
            this.sortBy = 'name';
        })
    }

    addSession(){
        this.addMode = true;
    }

    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null,this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        // console.log('session.id = '+ session.id);
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {this.addMode = false}
}