import { NgForm } from '@angular/forms';
import { UserServiceService } from './../service/user-service.service';
import { UserForm } from './../form/user-form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.css']
})
export class HtmlTableComponent implements OnInit {

  user = new UserForm();

  // jsonStr = [
  //   { 'id': 1, 'fname': 'arun', 'lname': 'prasath', 'email': 'test@email.com', 'pwd': 'test' },
  //   { 'id': 2, 'fname': 'nura', 'lname': 'jk', 'email': 'test@email.com', 'pwd': 'test' }
  // ];
  jsonStr: any;

  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
    this.onRefresh();
  }
  onRefresh() {
    this.userService.getAllUsers().subscribe(data => {
      this.jsonStr = data;
    });
  }

  onSubmit(f: NgForm) {
    this.userService.postUser(JSON.stringify(f.value));
    this.onRefresh();
  }

  getUserById(id) {
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
      this.user.pwd = '';
    });
  }

  deleteUserById(id) {
    this.userService.deleteUser(id);
    this.onRefresh();
  }
}
