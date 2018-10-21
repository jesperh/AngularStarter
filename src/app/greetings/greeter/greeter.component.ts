import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  public greeting = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.greet(name);
    });
  }

  private greet(name: string) {
    this.greeting = `Greetings ${name}`;
  }
}
