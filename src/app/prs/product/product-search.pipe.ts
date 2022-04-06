import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(vendors: Product[], searchCriteria: string = ""): Product[] {
    if(searchCriteria === "") {
      return vendors;
    }
    let selProducts: Product[] = [];
    let search = searchCriteria.toLowerCase();
    for(let v of vendors) {
      if(
        v.partNbr.toLowerCase().includes(search)
          || v.name.toLowerCase().includes(search)
          || v.price.toString().includes(search)
          || v.unit.toLowerCase().includes(search)
          || (v.photoPath != null && v.photoPath.toLowerCase().includes(search))
          || v.vendorName.toLowerCase().includes(search)
      ) {
        selProducts.push(v);
      }
    }
    return selProducts;
  }

}
