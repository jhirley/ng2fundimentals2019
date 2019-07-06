import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";


@Component({
  templateUrl: "./profile.component.html",
  styles: [`
  em { float: right; color: #E05C65; padding-left: 10px  }
  .error input {background-color: #e3c3c5;}
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-input-placeholder { color: #999; }
  .error :-moz-input-placeholder { color: #999; }
  .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent {

  profileForm: FormGroup;
  private firstName:FormControl;
  private lastName:FormControl;

  constructor(
    private auth: AuthService,
    private router: Router){}

  ngOnInit(){
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(value){
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(value.firstName,value.lastName);
      this.router.navigate(['/events']);
    }
  }

  cancel(){
    this.router.navigate(['/events']);
  }

  validatefirstName(){ return (this.firstName.valid || this.firstName.untouched);}
  validateLastName(){ return (this.lastName.valid || this.lastName.untouched);}
       
}
