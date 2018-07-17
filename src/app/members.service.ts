import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  public url = 'assets/users.json';
  constructor(private http: HttpClient) { }

  public getMembers() {
    return this.http.get(this.url)
  }

  public couple(members) {
    let coupleList = [];
    let recipients = members.slice();
    for (let i = 0; i < members.length; i++) {
      let givers = members[i];
      let recIndex = Math.floor(Math.random() * recipients.length);
      while (recipients[recIndex] === givers) {
        recIndex = Math.floor(Math.random() * recipients.length);
      }
      let recipient = recipients.splice(recIndex, 1)[0];
      coupleList.push({
        givers: givers,
        receiver: recipient
      });
    }
    return coupleList;
  };
}
