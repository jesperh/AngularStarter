import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { GreetingsComponent } from './greetings.component';
import { GreeterComponent } from './greeter/greeter.component';

const routes: Routes = [
  {
    path: '',
    component: GreetingsComponent
  },
  {
    path: 'greet/:name',
    component: GreeterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreetingsRoutingModule { }
