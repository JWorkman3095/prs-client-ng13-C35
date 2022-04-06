import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system.service';
import { UserSearchPipe } from '../user-search.pipe';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  tableHeadingStyle: string = "btn btn-link clickable";

  users!: User[];
  get isAdmin() { return this.sys.isAdmin; }

  sortColumn: string = "lastname";
  sortOrderAsc: boolean = true; 
  searchCriteria: string = "";

  constructor(
    private sys: SystemService,
    private usrsvc: UserService
  ) { }

  sortFn(sortColumn: string): void {
    if(this.sortColumn === sortColumn) {
      this.sortOrderAsc = !this.sortOrderAsc;
      return;
    }
    this.sortColumn = sortColumn;
    this.sortOrderAsc = true;
  }

  ngOnInit(): void {
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.debug(res); 
        this.users = res;
      },
      error: (err) => console.error(err)
    });
  }

}
