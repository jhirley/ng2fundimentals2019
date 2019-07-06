import { Injectable } from '@angular/core';
import { IUser } from "./user.model";

@Injectable(
  // {
  // providedIn: 'root'
// }
)
export class AuthService {

  constructor() { }
  
   currentUser: IUser;

  loginUser(userName:string, password:string){
     this.currentUser = {
       id: 1,
       userName: userName,
       firstName: 'John',
       lastName: 'Papa'
     }
  } 

  isAuthenticated(){
    return !!this.currentUser; 
  }

  updateCurrentUser(newFirstName,newLastName){
    this.currentUser.firstName = newFirstName;
    this.currentUser.lastName = newLastName;
  }
}
