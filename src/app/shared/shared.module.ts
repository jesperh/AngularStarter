import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule { }
