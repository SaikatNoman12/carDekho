import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifferenceComponent } from './difference.component';

const routes: Routes = [
  {
    path:'',
    component:DifferenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DifferenceRoutingModule { }
