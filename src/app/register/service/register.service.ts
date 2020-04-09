import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {User} from '../pojo/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlRoot = environment.serverAddress;
  getURL = '/register/all';
  postURL = '/register/create';
  // TEST
  // private urlRoot = environment.exampleServerAddress;
  // getURL = '/posts';
  // postURL = '/posts';

  constructor(private http: HttpClient) {
  }

  private results = new BehaviorSubject<[User]>(null);
  eventEntry = this.results.asObservable();

  // GET Users
  getData() {
    this.http
      .get<[User]>(this.urlRoot + this.getURL)
      .subscribe(data => {
        this.results.next(data);
      }, err => {
        console.log('Something went wrong in Getting Data!');
      });
  }

  // POST User
  postData(entry: User) {
    this.http
      .post<[User]>(this.urlRoot + this.postURL, entry)
      .subscribe(data => {
        this.results.next(data);
        console.log(data);
      }, err => {
        console.log('Something went wrong in Posting Data!');
      });
  }
}

