import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { QuanLyDuAnComponent } from './quan-ly-du-an.component';

const routes: Routes = [
  {
    path:'',
    component:QuanLyDuAnComponent,
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
  ,
  exports :[RouterModule]
})
export class QuanLyDuAnRoutingModule { }
