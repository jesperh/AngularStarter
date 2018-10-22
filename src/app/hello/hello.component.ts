import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public hello = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const obj = params['object'];
      this.sayHello(obj);
    });
  }

  private sayHello(name) {
    if (name == null) {
      this.hello = '';
      return;
    }
    this.hello = `Hello ${name}!`;
  }

}
