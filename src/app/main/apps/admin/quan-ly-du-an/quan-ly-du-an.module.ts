import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDuAnComponent } from './quan-ly-du-an.component';
import { DuanComponent } from './duan/duan.component';
import { ChitietduanComponent } from './chitietduan/chitietduan.component';

@NgModule({
  declarations: [QuanLyDuAnComponent,DuanComponent,ChitietduanComponent],
  imports: [
    CommonModule
  ]
})
export class QuanLyDuAnModule { }
