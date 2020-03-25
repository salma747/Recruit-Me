import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent} from "./login/login.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'user-profile', component: UserProfileComponent}
  /*{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }*/,{
    path: 'recruit-me',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }
    ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)

    /*RouterModule.forRoot(routes,{
       useHash: true
    })*/
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
