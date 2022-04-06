import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string = ""): User[] {
    if(searchCriteria === "") {
      return users;
    }
    let selUsers: User[] = [];
    let search = searchCriteria.toLowerCase();
    for(let u of users) {
      if(
        u.username.toLowerCase().includes(search)
          || u.firstname.toLowerCase().includes(search)
          || u.lastname.toLowerCase().includes(search)
          || (u.phone != null && u.phone.toLowerCase().includes(search))
          || (u.email != null && u.email.toLowerCase().includes(search))
      ) {
        selUsers.push(u);
      }
    }
    return selUsers;
  }

}
