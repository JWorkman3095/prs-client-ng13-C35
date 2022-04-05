import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], col: string = "id", asc: boolean = true): any[] {
    
    const sortFn = (a:any, b:any): number => {
      let x = a[col] == null ? "" : typeof a[col] == "number" ? a[col] : a[col].toString().toLowerCase();
      let y = b[col] == null ? "" : typeof b[col] == "number" ? b[col] : b[col].toString().toLowerCase();
      if(asc) {
        return (x < y) ? -1 : 1
      } else {
        return (x < y) ? 1 : -1
      }
    }
    if(typeof arr == "undefined" || arr == null) {
      return arr;
    }
    return arr.sort(sortFn);
  }

}
