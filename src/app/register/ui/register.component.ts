import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventService} from '../../event-create/service/event.service';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  entryRegisterForm: FormGroup;
  devjson;

  constructor(private dService: UserService,
              private fb: FormBuilder,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.dService.eventEntry.subscribe(data => {
      if (data != null) {
        console.log('load Data');
      }
    });
    this.dService.getData();
    console.log('load Page');
    //
    this.registerForm();
  }

  onSubmit(f) {
    if (f.valid) {
      console.log('This form is good to go.');
    }
    console.log(f.value);
    this.devjson = f.value;
    this.dService.postData(f.value);
  }

  registerForm() {
    this.entryRegisterForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      username: '',
      password: '',

      // id: '',
      // userId: '',
      // title: '',
      // body: ''

    });
  }
}
