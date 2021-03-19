import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
      path:'',
      component:AdminComponent,
      children:[
        {path:'',redirectTo:'',pathMatch:'full'},
        {path:'quan-ly-nhan-vien',loadChildren:'./quan-ly-nhan-vien/quan-ly-nhan-vien.module#QuanLyNhanVienModule'},
        // {path:'quan-ly-du-an',loadChildren:'./quan-ly-du-an.module#QuanLyDuAnModule'},
        // {path:'quan-ly-cong-viec',loadChildren:'./quan-ly-cong-viec#QuanLyCongViecModule'}
      ]
    }
] 
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class AdminRoutingModule { }
