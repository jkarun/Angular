import { UserForm } from './../form/user-form';
import { UserServiceService } from './../service/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {
  user = new UserForm();
  // jsonStr = [
  //   { 'id': 1, 'fname': 'arun', 'lname': 'prasath', 'email': 'test@email.com', 'pwd': 'test' },
  //   { 'id': 2, 'fname': 'nura', 'lname': 'jk', 'email': 'test@email.com', 'pwd': 'test' }
  // ];
  jsonStr: any;

  userListTable = {
    mode: 'inline',
    edit: {
      confirmSave: true
    },
    delete: {
      confirmDelete: true
    },
    add: {
      confirmCreate: true
    },
    columns: {
      id: {
        title: 'ID',
        editable: false
      },
      fname: {
        title: 'First Name'
      },
      lname: {
        title: 'Last Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

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

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.userService.deleteUser(event.data.id);
      event.confirm.resolve();
      this.onRefresh();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    console.log(event);
    if (window.confirm('Are you sure you want to edit?')) {
     this.userService.postUser(event.newData);
      // event.newData['name'] += ' + added in code';
      event.confirm.resolve();
      this.onRefresh();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    console.log(event.newData);
    if (window.confirm('Are you sure you want to create?')) {
      // event.newData['name'] += ' + added in code';
      this.userService.postUser(event.newData);
      this.onRefresh();
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
