import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  pageTitle: string = "Vendor Create";
  vendor: Vendor = new Vendor();
  get isAdmin() { 
    if(!this.sys.isLoggedIn) {
      return false;
    } 
    return this.sys.getLoggedInUser()?.isAdmin; 
  }

  constructor(
    private sys: SystemService,
    private vndsvc: VendorService,
    private router: Router
  ) { }

  save(): void {
    this.vndsvc.create(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor created");
        this.router.navigateByUrl("/vendors/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
  }

}
