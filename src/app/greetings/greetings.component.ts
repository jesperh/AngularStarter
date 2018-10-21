import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person';

const PEOPLE = [new Person('Joe'), new Person('Jane')];

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  public displayedColumns: string[] = ['name'];
  public dataSource = PEOPLE;

  constructor() {
   }

  ngOnInit() {
  }

}
