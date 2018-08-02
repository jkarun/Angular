import { async } from '@angular/core/testing';
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
export class AppComponent { }
