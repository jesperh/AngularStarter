import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  public people = [new Person('Joe'), new Person('Jane')];

  constructor() {
   }

  ngOnInit() {
  }

}
