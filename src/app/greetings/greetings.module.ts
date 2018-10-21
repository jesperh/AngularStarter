import { NgModule } from '@angular/core';
import { GreetingsRoutingModule } from './greetings-routing.module';
import { GreetingsComponent } from './greetings.component';
import { SharedModule } from '../shared/shared.module';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  imports: [
    GreetingsRoutingModule,
    SharedModule
  ],
  declarations: [GreetingsComponent, GreeterComponent]
})
export class GreetingsModule { }
