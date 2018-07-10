import { UserForm } from './../form/user-form';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) { }
  userList: string;
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
  };

  getAllUsers() {
    return this.http.get<UserForm>('http://localhost:8080/users');
    //  .subscribe(data => {
    //   console.log('log in service: ' + data);
    //    return data;
    //  });
  }

  getUsers(): Observable<UserForm[]> {
    return null;
    // return this.http.get('http://localhost:8080/users');
    //  .map((res: Response) => res.json())
    //  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUser(user) { }

  postUser(user) {
    console.log('post method:: ' + user);
    this.http.post('http://localhost:8080/users', user, this.options).subscribe();
  }
}
