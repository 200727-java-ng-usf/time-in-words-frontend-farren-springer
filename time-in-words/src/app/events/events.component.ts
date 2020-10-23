import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 
  events;
  
  
  constructor( private eventService: EventService) {
    this.eventService.getAllEvents().subscribe(
      resp => {
        this.events = resp.body;
      },
      err => {console.log(err.status);} 
    );

  }

  ngOnInit(): void {

  }

  
  }