import { Injectable } from '@angular/core';
import { Person } from '../shared/person';
import { of, Observable } from 'rxjs';

export const PEOPLE = [new Person('Joe'), new Person('Jane')];

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  constructor() { }

  // In real application you would actually
  // get data from api and return it with http
  getPeopleToGreet(): Observable<Person[]> {
    const source = of(PEOPLE);
    return source;
  }
}
