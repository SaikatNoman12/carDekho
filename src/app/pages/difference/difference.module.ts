import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DifferenceRoutingModule } from './difference-routing.module';
import { DifferenceComponent } from './difference.component';
import { MaterialModule } from 'src/app/materials/materials.module';


@NgModule({
  declarations: [
    DifferenceComponent
  ],
  imports: [
    CommonModule,
    DifferenceRoutingModule,
    MaterialModule
  ]
})
export class DifferenceModule { }
