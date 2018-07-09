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
  public updateMembers(m){
    for (let i = m.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [m[i], m[j]] = [m[j], m[i]]; 
    }
    return m;
  }
}
