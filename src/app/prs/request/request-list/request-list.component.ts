import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  tableHeadingStyle: string = "btn btn-link clickable";

  requests!: Request[];
  get isAdmin() { return this.sys.isAdmin; }

  sortColumn: string = "status";
  sortOrderAsc: boolean = true;
  searchCriteria: string = "";

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService
  ) { }

  sortFn(sortColumn: string): void {
    if (this.sortColumn === sortColumn) {
      this.sortOrderAsc = !this.sortOrderAsc;
      return;
    }
    this.sortColumn = sortColumn;
    this.sortOrderAsc = true;
  }

  addUserUsername(requests: Request[]) {
    for(let r of requests) {
      r.userUsername = r.userUsername;
    }
  }

  ngOnInit(): void {
    this.reqsvc.list().subscribe({
      next: (res) => {
        this.addUserUsername(res);
        console.debug(res);
        this.requests = res;
      },
      error: (err) => console.error(err)
    });
  }

}
