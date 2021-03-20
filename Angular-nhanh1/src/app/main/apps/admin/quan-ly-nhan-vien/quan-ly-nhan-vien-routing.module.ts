import { NgModule } from '@angular/core';
import { QuanLyNhanVienComponent } from './quan-ly-nhan-vien.component';
import { ChitietnhanvienComponent } from './chitietnhanvien/chitietnhanvien.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: QuanLyNhanVienComponent,
    // children: [
    //   { path: 'nhanvien', component: NhanvienComponent },
    //   { path: 'chitietnhanvien', component:ChitietnhanvienComponent }
    // ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class QuanLyNhanVienRoutingModule { }
