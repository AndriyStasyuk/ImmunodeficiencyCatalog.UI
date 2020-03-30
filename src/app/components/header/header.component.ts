import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userRole");
  }

  isLogIn(){
    if(localStorage.getItem('accessToken') && localStorage.getItem('userRole')){
      return true;
    }
    return false;
  }
  ngOnInit() {
    console.log(this.isLogIn())
    return this.isLogIn()
  }


}
