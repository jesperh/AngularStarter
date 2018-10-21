import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { GreetingsComponent } from './greetings.component';

const routes: Routes = [
  {
    path: '',
    component: GreetingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreetingsRoutingModule { }
