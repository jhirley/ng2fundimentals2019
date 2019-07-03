import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

// import { NavbarComponent } from '../navbar/navbar.component';
// import { Error404Component } from "../errors/404.component";
// import { ToastrService } from '../common/toastr.service';

import { userRoutes } from "./user.routes";
import { ProfileComponent } from "./profile.component";


@NgModule({
  declarations: [
    ProfileComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  
  ],
  providers: [
    // EventService,
  ]
})
export class UserModule { }
