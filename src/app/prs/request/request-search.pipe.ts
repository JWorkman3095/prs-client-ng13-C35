import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string = ""): Request[] {
    if(searchCriteria === "") {
      return requests;
    }
    let selRequests: Request[] = [];
    let search = searchCriteria.toLowerCase();
    for(let r of requests) {
      if(
        r.description.toLowerCase().includes(search)
          || r.justification.toLowerCase().includes(search)
          || r.deliveryMode.toString().includes(search)
          || r.status.toLowerCase().includes(search)
          || r.total.toString().includes(search)
          || r.userUsername.toLowerCase().includes(search)
      ) {
        selRequests.push(r);
      }
    }
    return selRequests;
  }

}
