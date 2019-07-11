import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from "./errors/404.component";
import { ToastrService } from './common/index';

import { AuthService } from "./user/index";
import { EventService } from "./events/index";

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
    ToastrService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
