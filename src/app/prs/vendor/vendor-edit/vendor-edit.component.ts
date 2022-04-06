import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  pageTitle: string = "Vendor Change";
  vendor!: Vendor;
  get isAdmin() { 
    if(!this.sys.isLoggedIn) {
      return false;
    } 
    return this.sys.getLoggedInUser()?.isAdmin; 
  }

  constructor(
    private sys: SystemService,
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.vndsvc.change(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor changed");
        this.router.navigateByUrl("/vendors/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vndsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      error: (err) => console.error(err)
    });
  }

}
