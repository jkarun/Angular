import { UserForm } from './../form/user-form';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) { }

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
  };

  getAllUsers() {
    return this.http.get<UserForm>('http://localhost:8080/users');
  }

  getUserById(id) {
    return this.http.get<UserForm>('http://localhost:8080/users/getUser?id=' + id);
  }

  deleteUser(id) {
    return this.http.delete('http://localhost:8080/users/deleteUser?id=' + id).subscribe();
  }

  postUser(user) {
    return this.http.post('http://localhost:8080/users', user, this.options).subscribe();
  }
}
