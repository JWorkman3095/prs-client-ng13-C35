import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  tableHeadingStyle: string = "btn btn-link clickable";

  products!: Product[];
  get isAdmin() { return this.sys.isAdmin; }

  sortColumn: string = "partNbr";
  sortOrderAsc: boolean = true;
  searchCriteria: string = "";

  constructor(
    private sys: SystemService,
    private prdsvc: ProductService
  ) { }

  sortFn(sortColumn: string): void {
    if (this.sortColumn === sortColumn) {
      this.sortOrderAsc = !this.sortOrderAsc;
      return;
    }
    this.sortColumn = sortColumn;
    this.sortOrderAsc = true;
  }

  ngOnInit(): void {
    this.prdsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.products = res;
      },
      error: (err) => console.error(err)
    });
  }
}
