import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      // {
      //   path:'',
      //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      // },
      {
        path:'',
        loadChildren: () => import('./compare/compare.module').then(m => m.CompareModule)
      },
      {
        path:'difference',
        loadChildren: () => import('./difference/difference.module').then(m => m.DifferenceModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
