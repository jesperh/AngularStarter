import { NgModule } from '@angular/core';
import { GreetingsRoutingModule } from './greetings-routing.module';
import { GreetingsComponent } from './greetings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    GreetingsRoutingModule,
    SharedModule
  ],
  declarations: [GreetingsComponent]
})
export class GreetingsModule { }
