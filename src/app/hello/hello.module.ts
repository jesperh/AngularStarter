import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { HelloRoutingModule } from './hello-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    HelloRoutingModule,
    SharedModule
  ],
  declarations: [HelloComponent]
})
export class HelloModule { }
