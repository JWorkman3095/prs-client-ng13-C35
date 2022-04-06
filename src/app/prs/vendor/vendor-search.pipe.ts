import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string = ""): Vendor[] {
    if(searchCriteria === "") {
      return vendors;
    }
    let selVendors: Vendor[] = [];
    let search = searchCriteria.toLowerCase();
    for(let v of vendors) {
      if(
        v.code.toLowerCase().includes(search)
          || v.name.toLowerCase().includes(search)
          || v.address.toLowerCase().includes(search)
          || v.city.toLowerCase().includes(search)
          || v.state.toLowerCase().includes(search)
          || v.zip.toLowerCase().includes(search)
          || (v.phone != null && v.phone.toLowerCase().includes(search))
          || (v.email != null && v.email.toLowerCase().includes(search))
      ) {
        selVendors.push(v);
      }
    }
    return selVendors;
  }

}
