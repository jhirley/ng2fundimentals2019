import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    // templateUrl: 'collapsible-well.component.html'
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4 class="well-title">{{title}}</h4>
        <ng-content *ngIf="visible"></ng-content>
    </div>
    `
})

export class CollapsibleWellComponent implements OnInit {
    @Input() title: string;
    visible: boolean;

    constructor() { }

    ngOnInit() { }

    toggleContent(){
        this.visible=!this.visible;
    }

}