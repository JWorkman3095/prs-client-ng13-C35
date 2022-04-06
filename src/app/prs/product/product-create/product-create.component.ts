import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../product.service';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  pageTitle: string = "Product Create";
  product: Product = new Product();
  vendors!: Vendor[];
  get isAdmin() { 
    if(!this.sys.isLoggedIn) {
      return false;
    } 
    return this.sys.getLoggedInUser()?.isAdmin; 
  }

  constructor(
    private sys: SystemService,
    private prdsvc: ProductService,
    private vncsvc: VendorService,
    private router: Router
  ) { }

  save(): void {
    this.prdsvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Product created");
        this.router.navigateByUrl("/products/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.vncsvc.list().subscribe({
      next: (res) => { 
        console.debug("Vendors:", res);
        this.vendors = res;
      },
      error: (err) => console.error(err)
    });
  }

}
