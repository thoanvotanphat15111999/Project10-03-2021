import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuanLyCongViecComponent } from './quan-ly-cong-viec.component';
const routes: Routes = [
  {
    path:'',
    component:QuanLyCongViecComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
  ,
  exports:[RouterModule]
})
export class QuanLyCongViecRoutingModule { }
