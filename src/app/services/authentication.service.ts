import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }
  
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userRole');
  }

  isLogIn(){
    if(localStorage.getItem('accessToken') && localStorage.getItem('userRole')){
      return true;
    }
    return false;
  }
}
