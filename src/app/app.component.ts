import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname = '';
  lname = '';
  email = '';
  pwd = '';
  cpwd = '';

  jsonStr = [
    { 'id': 1, 'fname': 'arun', 'lname': 'prasath', 'email': 'test@email.com', 'pwd': 'test' },
    { 'id': 2, 'fname': 'nura', 'lname': 'jk', 'email': 'test@email.com', 'pwd': 'test' }
  ];

  // jsonData = JSON.parse( this.jsonStr );
  onRegister() {
    alert(this.fname + this.lname + this.email);
  }
  onSubmit(f: NgForm) {
    console.log(f.form.value);  // { first: '', last: '' }
    // console.log(f.valid);  // false
  }
}
