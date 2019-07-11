import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsible-two-window-well',
    // templateUrl: 'collapsible-well.component.html'
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    `
})

export class CollapsibleTwoWindowWellComponent implements OnInit {
    @Input() title: string;
    visible: boolean;

    constructor() { }

    ngOnInit() { }

    toggleContent(){
        this.visible=!this.visible;
    }

}