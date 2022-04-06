import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pageTitle: string = "User Create";
  user: User = new User();
  get isAdmin() { 
    if(!this.sys.isLoggedIn) {
      return false;
    } 
    return this.sys.getLoggedInUser()?.isAdmin; 
  }

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  save(): void {
    this.usrsvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("User created");
        this.router.navigateByUrl("/users/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
  }

}
