import { NgModule } from '@angular/core';
import { GreetingsRoutingModule } from './greetings-routing.module';
import { GreetingsComponent } from './greetings.component';
import { SharedModule } from '../shared/shared.module';
import { GreeterComponent } from './greeter/greeter.component';
import { GreetEditorComponent } from './greet-editor/greet-editor.component';

@NgModule({
  imports: [
    GreetingsRoutingModule,
    SharedModule
  ],
  declarations: [GreetingsComponent, GreeterComponent, GreetEditorComponent]
})
export class GreetingsModule { }
