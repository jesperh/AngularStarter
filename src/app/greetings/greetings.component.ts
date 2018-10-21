import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person';
import { GreetingsService } from './greetings.service';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  public displayedColumns: string[] = ['name'];
  public dataSource = [];

  constructor(private greetingsService: GreetingsService) {

   }

  ngOnInit() {
    this.dataSource = this.greetingsService.getPeopleToGreet();
  }

}
