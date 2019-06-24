import { Component, OnInit } from '@angular/core';
import { EventService } from "../shared/event.service";
import { ToastrService } from "../../common/toastr.service";


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  
  constructor(
    private eventService: EventService,
    private toastService: ToastrService) { }

  events: any[];

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(data){
    this.toastService.success(data);
  }
}
