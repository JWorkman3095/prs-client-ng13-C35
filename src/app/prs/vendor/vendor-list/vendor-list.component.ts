import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  tableHeadingStyle: string = "btn btn-link clickable";

  vendors!: Vendor[];
  get isAdmin() { return this.sys.isAdmin; }

  sortColumn: string = "code";
  sortOrderAsc: boolean = true; 
  searchCriteria: string = "";

  constructor(
    private sys: SystemService,
    private vndsvc: VendorService
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
    this.vndsvc.list().subscribe({
      next: (res) => {
      console.debug(res); 
      this.vendors = res;
    },
    error: (err) => console.error(err)
  });  
}

}
