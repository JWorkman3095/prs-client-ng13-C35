import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  pageTitle: string = "PRS Login";
  showVerifyButton: boolean = false;
  get isAdmin() { 
    if(!this.sys.isLoggedIn) {
      return false;
    } 
    return this.sys.getLoggedInUser()?.isAdmin; 
  }
  usr: string = "sa";
  pwd: string = "sa"
  msg: string = "";

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  login(): void {
    this.msg = "";
    this.usrsvc.login(this.usr, this.pwd).subscribe({
      next: (res) => {
        console.debug("Login successful");
        this.sys.setLoggedInUser(res);
        this.router.navigateByUrl("/requests/list");
      },
      error: (err) => {
        if(err.status == 404) {
          this.msg = "Username/Password is not found";
        } else {
          console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
