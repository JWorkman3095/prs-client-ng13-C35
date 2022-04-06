import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { UserSearchPipe } from '../user-search.pipe';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pageTitle: string = "User Detail";
  maintTypeDetail: boolean = true;
  user!: User;
  showVerifyButton: boolean = false;
  get isAdmin() { 
    if(!this.sys.isLoggedIn) {
      return false;
    } 
    return this.sys.getLoggedInUser()?.isAdmin; 
  }

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }
  verifyRemove(): void {
    this.usrsvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug("User deleted!");
        this.router.navigateByUrl("/users/list");
      },
      error: (err) => console.error(err)
    });
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usrsvc.get(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res;
      },
      error: (err) => console.error(err)
    });
  }

}
