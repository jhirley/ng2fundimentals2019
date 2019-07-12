import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from "./errors/404.component";

import { AuthService } from "./user/index";
import { EventService } from "./events/index";

declare let toastr:Toastr;
import { TOASTR_TOKEN, Toastr } from './common/index';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN , useValue: toastr},
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
