import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { EventService, ISession, restrictedWords } from "../shared/index";

import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  isDirty: boolean = true;
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  // newSession;

  constructor(
    private router: Router,
    private eventService: EventService) { }

  ngOnInit() {
      this.name = new FormControl('', Validators.required);
      this.presenter = new FormControl('', Validators.required);
      this.duration = new FormControl('', Validators.required);
      this.level = new FormControl('', Validators.required);
      this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo','bar'])]);

      this.newSessionForm = new FormGroup({
        name: this.name,
        presenter: this.presenter,
        duration: this.duration,
        level: this.level,
        abstract: this.abstract,
      })
  }

  saveSession(formValues){
    console.log(formValues);
    // this.eventService.saveEvent(formValues);
    let session:ISession ={
      id: undefined,
      name: formValues.name,
      duration: + formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
  cancel(){
    this.router.navigate(['/events']);
  }
}
