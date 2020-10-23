import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 
  events;
  timeInWords;
  hour = 2; // initialized to test the URL picks up this value
  minute = 20;
  
  constructor( private eventService: EventService) {
    this.eventService.getAllEvents().subscribe(
      resp => {
        this.events = resp.body;
      },
      err => {console.log(err.status);} 
    );

    console.log('Hour: ' + this.hour);
    console.log('Minute: ' + this.minute);
    this.eventService.getTimeInWords(this.hour, this.minute).subscribe(
      resp => {
        this.timeInWords = resp.body;
      },
      err => {console.log(err.status);}
    );
    console.log('Time in Words: ' + this.timeInWords);
    
  }

  ngOnInit(): void {

    

  }

  

  }