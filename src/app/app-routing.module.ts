import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';



const  routes: Routes = [
{ path: '', redirectTo: '/dangnhap', pathMatch: 'full' },
{path:'dangnhap',component :DangnhapComponent},
{path:'dangky',component:DangkyComponent},
{path:'admin',component:AdminComponent,canActivate:[AuthGuard]},
{ path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)

  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
