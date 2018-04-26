import { UserForm } from './../form/user-form';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) { }
  userList: string;

  getAllUsers() {
    this.http.get('http://localhost:8080/users').catch(e => console.log(e))
      .map((res: Response) => res.json());
  }

  getUsers(): Observable<UserForm[]> {
    return this.http.get('http://localhost:8080/users')
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}

  getOneUser(user) { }

  postOneUser(user) { }
}
