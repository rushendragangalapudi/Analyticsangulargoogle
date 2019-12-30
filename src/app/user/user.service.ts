import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userList () {
    return this.http.get('http://localhost:3000/user/users')
  }
  searchUser(searchstring) {
    return this.http.get('http://localhost:3000/user/search/' + searchstring)
    
  }
}
