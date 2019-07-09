import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { EventService } from "../shared/index";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  isDirty: boolean = true;
  newEvent;

  constructor(
    private router: Router,
    private eventService: EventService) { }

  ngOnInit() {
  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
  cancel(){
    this.router.navigate(['/events']);
  }
}
