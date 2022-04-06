import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  pageTitle: string = "Vendor Detail";
  vendor!: Vendor;
  showVerifyButton: boolean = false;
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

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }
  verifyRemove(): void {
    this.vndsvc.remove(this.vendor.id).subscribe({
      next: (res) => {
        console.debug("Vendor deleted!");
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
