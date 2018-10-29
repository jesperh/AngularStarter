import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-greet-editor',
  templateUrl: './greet-editor.component.html',
  styleUrls: ['./greet-editor.component.css']
})
export class GreetEditorComponent implements OnInit {

  greeterForm = new FormGroup({
    name: new FormControl('')
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.greeterForm.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
