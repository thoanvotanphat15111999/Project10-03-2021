import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDuAnComponent } from './quan-ly-du-an.component';
import { DuanComponent } from './duan/duan.component';
import { ChitietduanComponent } from './chitietduan/chitietduan.component';
import { QuanLyDuAnRoutingModule } from './quan-ly-du-an-routing.module';

@NgModule({
  declarations: [QuanLyDuAnComponent,DuanComponent,ChitietduanComponent],
  imports: [
    CommonModule,
    QuanLyDuAnRoutingModule
  ]
})
export class QuanLyDuAnModule { }
