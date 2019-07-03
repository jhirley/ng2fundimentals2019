import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; 
// import { EventService } from "../shared/event.service";
import { ToastrService } from "../../common/toastr.service";


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  
  constructor(
    // private eventService: EventService,
    private toastService: ToastrService,
    private route: ActivatedRoute) { }

  events: any[];

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    // this.eventService.getEvents().subscribe(events => {this.events = events});
  }

  handleEventClicked(data){
    this.toastService.success(data);
  }
}
