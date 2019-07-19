import { Component, OnInit } from '@angular/core';
// import { Form } from "@angular/forms";
import { AuthService } from "../user/index";
import { ISession, EventService } from '../events';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth : AuthService,
    private eventService:EventService) { }

  searchTerm:string = '';
  foundSessions:ISession[];

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      // console.log(this.foundSessions);
    })
  }

}
