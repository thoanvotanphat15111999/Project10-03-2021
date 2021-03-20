import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongviecComponent } from './congviec/congviec.component';
import { QuanLyCongViecComponent } from './quan-ly-cong-viec.component';
import { ChitietcongviecComponent } from './chitietcongviec/chitietcongviec.component';
import { QuanLyCongViecRoutingModule } from './quan-ly-cong-viec-routing.module';

@NgModule({
  declarations: [QuanLyCongViecComponent,CongviecComponent,ChitietcongviecComponent],
  imports: [
    CommonModule,
    QuanLyCongViecRoutingModule
  ]
})
export class QuanLyCongViecModule { }
