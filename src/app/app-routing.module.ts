import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'greetings',
    loadChildren: './greetings/greetings.module#GreetingsModule'
  },
  {
    path: 'hello',
    loadChildren: './hello/hello.module#HelloModule'
  },
  { path: 'home', component: HomeComponent },
  // { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
