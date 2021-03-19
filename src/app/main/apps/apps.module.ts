import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';


const routes : Routes =[
    {
      path:'',
      children :[
          {
            path:'',
            redirectTo :'admin',pathMatch:'full'
          },
          {
            path:'admin',
            loadChildren:'./admin/admin.module#AdminModule'
          },
          {
            path:'**',
            redirectTo:'page-not-found'
          }
          
      ]
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppsModule { }
