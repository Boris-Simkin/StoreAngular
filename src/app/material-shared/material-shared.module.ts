import { MdCheckboxModule } from '@angular/material';
import {MdGridListModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [
    MdCheckboxModule, 
    MdGridListModule,
    MdCardModule,
    MdButtonModule,
  ]
})
export class MaterialSharedModule { }
