import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import { NavbarComponent } from '../navbar/navbar.component';
// import { Error404Component } from "../errors/404.component";
// import { ToastrService } from '../common/toastr.service';

import { userRoutes } from "./user.routes";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // EventService,
  ]
})
export class UserModule { }
