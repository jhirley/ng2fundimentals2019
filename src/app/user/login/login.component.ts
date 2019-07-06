 import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormControl, Validators } from "@angular/forms";
 import { Router } from "@angular/router";

 import { AuthService } from "../auth.service";
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mouseOverLogin

  loginForm: FormGroup;
  private userName:FormControl;
  private password:FormControl;

  constructor(
    private auth: AuthService,
    private router: Router){}

  ngOnInit(){

    this.userName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.password = new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      userName: this.userName,
      password: this.password
    });
  }

  // saveProfile(value){
  //   if (this.profileForm.valid) {
  //     this.auth.updateCurrentUser(value.firstName,value.lastName);
  //     this.router.navigate(['/events']);
  //   }
  // }

  cancel(){
    this.router.navigate(['/events']);
  }

  validateUserName(){ return (this.userName.valid || this.userName.untouched);}
  validatePassword(){ return (this.password.valid || this.password.untouched);}
       

  login(formValues){
    this.auth.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['/events']);
  }


}
