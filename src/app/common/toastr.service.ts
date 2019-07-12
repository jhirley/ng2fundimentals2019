// import { Injectable } from '@angular/core';
import { InjectionToken } from "@angular/core";

// declare let toastr:any;
  

// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrService {
export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

export interface Toastr {
  success (msg: string, title?: string): void;
  info (msg: string, title?: string): void;
  warn (msg: string, title?: string): void;
  error (msg: string, title?: string): void;
}
//   constructor() { }
//   success(message:string, title?:string){
//     toastr.success(message,title);
//   }

//   error(message:string, title?:string){
//     toastr.error(message,title);
//   }

//   info(message:string, title?:string){
//     toastr.info(message,title);
//   }

//   warning(message:string, title?:string){
//     toastr.warning(message,title);
//   }
// }
