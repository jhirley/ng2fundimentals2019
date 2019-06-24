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
    console.log(this.event.name);
    this.eventClick.emit(this.event.name); 
  };

  logFoo(){
    console.log('foo');
  };

  getStartTimeClass(){
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return {green: isEarlyStart, bold: isEarlyStart}

    // if (this.event && this.event.time === '8:00 am')
    //   return 'green bold';
    // return '';

    if (this.event && this.event.time === '8:00 am')
    return ['green', 'bold'];
  return [];
  }
}
