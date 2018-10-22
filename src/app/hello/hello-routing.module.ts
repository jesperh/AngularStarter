import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent
  },
  {
    path: ':object',
    component: HelloComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
