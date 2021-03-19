import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNhanVienComponent } from './quan-ly-nhan-vien.component';
import { NhanvienComponent } from 'src/app/nhanvien/nhanvien.component';
import { ChitietnhanvienComponent } from './chitietnhanvien/chitietnhanvien.component';
import { QuanLyNhanVienRoutingModule } from './quan-ly-nhan-vien-routing.module';
import { ThemsuanvComponent } from './themsuanv/themsuanv.component';

@NgModule({
  declarations: [QuanLyNhanVienComponent,NhanvienComponent,ChitietnhanvienComponent, ThemsuanvComponent],
  imports: [
    CommonModule,
    QuanLyNhanVienRoutingModule
  ]
})
export class QuanLyNhanVienModule { }
