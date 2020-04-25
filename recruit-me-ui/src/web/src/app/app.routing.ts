import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent} from "./login/login.component";
import { AddCandidatComponent } from "./add-candidat/add-candidat.component";
import { UpdateCandidatComponent } from "./update-candidat/update-candidat.component";
import {TableListComponent} from "./table-list/table-list.component";
import { AddRecruteursComponent } from "./add-recruteur/add-recruteurs.component";
import { UpdateRecruteurComponent } from "./update-recruteur/update-recruteur.component";
import {ListRecruteursComponent} from "./list-recruteurs/list-recruteurs.component";

const routes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'user-profile', component: AddCandidatComponent},
  {path: 'candidats', component: TableListComponent},
  {path: 'update-candidat/:id', component: UpdateCandidatComponent},
  {path: 'add-recruteur', component: AddRecruteursComponent},
  {path: 'recruteur', component: ListRecruteursComponent},
  {path: 'update-recruteur/:id', component: UpdateRecruteurComponent}

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
