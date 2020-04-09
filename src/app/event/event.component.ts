import { Component, OnInit } from '@angular/core';
import {Event} from '../event-create/pojo/event';
import {EventService} from '../event-create/service/event.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventList: [Event];
  myDate=Date.now();


  constructor(private dService: EventService
  ) {
  }

  ngOnInit() {
    this.dService.eventEntry.subscribe(data => {
      if (data != null) {
        this.eventList = data;
        console.log('load Data');
      }
    });
    this.dService.getData();
  }

  }

