import { UserServiceService } from './service/user-service.service';
import { UserForm } from './form/user-form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    //  this.user = JSON.parse(JSON.stringify(this.jsonStr));
  }

  // jsonData = JSON.parse( this.jsonStr );
  onRegister() {
    alert(this.user.fname + this.user.lname + this.user.email);
  }
  onSubmit(f: NgForm) {
    this.userService.postUser(JSON.stringify(f.value));
    this.onRefresh();
  }

  onRefresh() {
    // this.user = JSON.parse(JSON.stringify(this.jsonStr));
    console.log(this.userService.getAllUsers().subscribe(data => {
      this.jsonStr = data;
    }));
    console.log('Json String from app.component.ts file : ' + this.jsonStr);
  }
}
