import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  pageTitle: string = "Request Change";
  request!: Request;
  get isAdmin() { 
    if(!this.sys.isLoggedIn) {
      return false;
    } 
    return this.sys.getLoggedInUser()?.isAdmin; 
  }

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.reqsvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request changed");
        this.router.navigateByUrl("/requests/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: (err) => console.error(err)
    });
  }

}
