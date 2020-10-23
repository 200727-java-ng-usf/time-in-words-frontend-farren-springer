import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private event: BehaviorSubject<Event>;
  event$: Observable<Event>;

  constructor(private http: HttpClient) {
    console.log('Instantiating EventService');
  }

  getAllEvents(){
    console.log("Fetching from backend...")
    console.log("URL: "+`${env.API_URL}/events`);
    return this.http.get(`${env.API_URL}/events`,{responseType:'json',observe:"response"});
  }

  getTimeInWords(hour: number, minute: number) {
    console.log("Fetching from backend...")
    console.log("URL: "+`${env.API_URL}/events/timeinwordscustom/hour/${hour}/minute/${minute}`);
    return this.http.get(`${env.API_URL}/events/timeinwordscustom/hour/${hour}/minute/${minute}`,{responseType:'json',observe:"response"});
  }
}