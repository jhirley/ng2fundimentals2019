import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from "./errors/404.component";

import { AuthService } from "./user/index";
import { EventService } from "./events/index";

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];
import { 
  TOASTR_TOKEN, Toastr, 
  JQUERY_TOKEN, 
  SimpleModalComponent ,
  ModalTriggerDirective
} from './common/index';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent,
    SimpleModalComponent,

    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ReactiveFormsModule
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN , useValue: toastr},
    { provide: JQUERY_TOKEN , useValue: jQuery},
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
