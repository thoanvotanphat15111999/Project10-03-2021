import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { QuanLyCongViecComponent } from './admin/quan-ly-cong-viec/quan-ly-cong-viec.component';
import { QuanLyNhanVienComponent } from './admin/quan-ly-nhan-vien/quan-ly-nhan-vien.component';
import { NhanVienComponent } from './admin/quan-ly-nhan-vien/nhan-vien/nhan-vien.component';
import { ChitietnhanvienComponent } from './admin/quan-ly-nhan-vien/chitietnhanvien/chitietnhanvien.component';
import { ChitietcongviecComponent } from './admin/quan-ly-cong-viec/chitietcongviec/chitietcongviec.component';
import { CongviecComponent } from './admin/quan-ly-cong-viec/congviec/congviec.component';
import { QuanLyDuAnComponent } from './admin/quan-ly-du-an/quan-ly-du-an.component';
import { DuanComponent } from './admin/quan-ly-du-an/duan/duan.component';
import { ChitietduanComponent } from './admin/quan-ly-du-an/chitietduan/chitietduan.component';
import { QuanLyTaiKhoanComponent } from './nhanvien/quan-ly-tai-khoan/quan-ly-tai-khoan.component';
import { ChitiettaikhoanComponent } from './nhanvien/quan-ly-tai-khoan/chitiettaikhoan/chitiettaikhoan.component';
import { TaikhoanComponent } from './nhanvien/quan-ly-tai-khoan/taikhoan/taikhoan.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/models/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuanLyCongViecComponent,
    QuanLyNhanVienComponent,
    NhanVienComponent,
    ChitietnhanvienComponent,
    ChitietcongviecComponent,
    CongviecComponent,
    QuanLyDuAnComponent,
    DuanComponent,
    ChitietduanComponent,
    QuanLyTaiKhoanComponent,
    ChitiettaikhoanComponent,
    TaikhoanComponent,
    AdminComponent,
    NhanvienComponent,
    DangnhapComponent,
    DangkyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
