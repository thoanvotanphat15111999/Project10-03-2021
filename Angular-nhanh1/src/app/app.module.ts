import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { DangkyComponent } from './dangky/dangky.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
      path: '',
      loadChildren:'./main/apps/apps.module#AppsModule',
  }
];
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        preloadingStrategy: PreloadAllModules,
      }),

  ],
  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
