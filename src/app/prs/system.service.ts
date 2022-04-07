import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppInitService } from '../app-init.service';
import { User } from './user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  get baseUrl() {
    if(typeof this.appinit.config === "undefined") {
      return "http://localhost:5000";
    } else {
      return this.appinit.config.baseUrl;
    }
  }
  _user!: User | null; 

  constructor(
    private appinit: AppInitService,
    private router: Router
  ) {}

  get isAdmin() {
    if(this._user == null) {
      return false;
    }
    return this._user.isAdmin;
  }

  get isLoggedIn() {
    return this._user != null;
  }

  getLoggedInUser(): User | null { 
      return this._user;
  }
  setLoggedInUser(user: User) {
    this._user = user;
  }
  clearLoggedInUser() {
    this._user = null;
  }

  chkLogin(): void {
    if(!this.isLoggedIn) {
      this.router.navigateByUrl("/login");
    }
  }
}
