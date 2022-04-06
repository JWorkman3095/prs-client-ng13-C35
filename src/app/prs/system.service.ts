import { Injectable } from '@angular/core';
import { User } from './user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  _user: User | null = { 
    id: 0, username: 'sa', password: 'sa', 
    firstname: 'sa', lastname: 'sa', 
    phone: '', email: '', 
    isReviewer: true, isAdmin: true 
  }

  constructor() { }

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
  setLoggedInUser(user: User | null) {
    this._user = user;
  }
  clearLoggedInUser() {
    this._user = null;
  }
}
