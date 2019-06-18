import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();  
  someProperty: any = "some value";

  constructor() { }

  ngOnInit() {
  }

  handleClickMe(){
    this.eventClick.emit(this.event.name); 
  };
  logFoo(){
    console.log('foo');
  };
}
