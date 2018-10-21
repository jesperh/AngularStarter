import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';


@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: []
})
export class SharedModule { }
