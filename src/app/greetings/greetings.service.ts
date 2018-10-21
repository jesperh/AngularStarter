import { Injectable } from '@angular/core';
import { Person } from '../shared/person';

const PEOPLE = [new Person('Joe'), new Person('Jane')];

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  constructor() { }

  getPeopleToGreet() {
    return PEOPLE;
  }
}
