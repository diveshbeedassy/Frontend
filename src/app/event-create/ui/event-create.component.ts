import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

import { EventService } from './../service/event.service';
import { Event } from './../pojo/event';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  eventList: [Event];
  entryCreateForm: FormGroup;
  devjson;
  myForm: FormGroup;
  disabled = false;
  ShowFilter = false;
  interest: any = []
  selectedItems: any = []
  dropdownSettings: any = {}
  constructor(  private dService: EventService,
                private fb: FormBuilder,
                private http: HttpClient,
              ) { }

  ngOnInit() {
    this.dService.eventEntry.subscribe(data => {
      if (data != null) {
        this.eventList = data;
        console.log('load Data');
      }
    });
    this.dService.getData();
    console.log('load Page');
    //
    this.createForm();
    this.interest = [
    { id: 1, interestName: 'Football'},
    { id: 2, interestName: 'Basketball'},
    { id: 3, interestName: 'Volleyball'},
    { id: 4, interestName: 'Handball'}
    ];
    this.selectedItems = [
      { id: 2, interestName: 'Basketball'},
      { id: 3, interestName: 'Volleyball'}
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'interestName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: this.ShowFilter,
    };
    this.myForm = this.fb.group({
      city: [this.selectedItems]
    });
      }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
    console.log(this.selectedItems);
 }


  onSelectAll(items: any) {
    console.log('onSelectAll',items);
  }

  onSubmit(f) {
    if (f.valid) {
      console.log('This form is good to go.');
    }
    console.log(f.value);
    this.devjson = f.value;
    this.dService.postData(f.value);
  }


  createForm() {
    this.entryCreateForm = this.fb.group({
      title: '',
      organizer: '',
      email: '',
      contact: '',
      dateStart: '2011-08-19T13:45:00',
      dateEnd: '2011-08-19T13:45:00',

      // id: '',
      // userId: '',
      // title: '',
      // body: ''

    });
  }

}
