import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent} from "./login/login.component";
import { AddCandidatComponent } from "./modules/candidat/add-candidat/add-candidat.component";
import { UpdateCandidatComponent } from "./modules/candidat/update-candidat/update-candidat.component";
import {TableListComponent} from "./modules/candidat/table-list/table-list.component";
import { AddRecruteursComponent } from "./modules/recruteur/add-recruteur/add-recruteurs.component";
import { UpdateRecruteurComponent } from "./modules/recruteur/update-recruteur/update-recruteur.component";
import {ListRecruteursComponent} from "./modules/recruteur/list-recruteurs/list-recruteurs.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { AddResprhComponent } from "./modules/responsable-rh/add-resprh/add-resprh.component";
import {ListResprhComponent} from "./modules/responsable-rh/list-resprh/list-resprh.component";
import {UpdateResprhComponent} from "./modules/responsable-rh/update-resprh/update-resprh.component";
import {RecruteurGuard} from "./core/guards/recruteur/recruteur.guard";
import {CandidatGuard} from "./core/guards/candidat/candidat.guard";
import {ResponsableRH} from "./core/models/responsableRH";
import {ResponsableRHGuard} from "./core/guards/responsable-rh/responsable-rh.guard";

import { AddTestComponent } from './modules/test-technique-r/add-test/add-test.component';
import { ListTestComponent } from './modules/test-technique-r/list-test/list-test.component';
import { UpdateTestComponent } from './modules/test-technique-r/update-test/update-test.component';

// @ts-ignore
const routes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: '', component: AdminLayoutComponent, children: [
      // {path: 'add-candidat', component: AddCandidatComponent},
      // {path: 'candidats', component: TableListComponent},
      // {path: 'update-candidat/:id', component: UpdateCandidatComponent},
      // {path: 'add-recruteur', component: AddRecruteursComponent},
      // {path: 'add-resprh', component: AddResprhComponent},
       {path: 'recruit-me', component: DashboardComponent},
      // {path: 'recruteur', component: ListRecruteursComponent},
      // {path: 'responsable-rh', component: ListResprhComponent},
      // {path: 'update-recruteur/:id', component: UpdateRecruteurComponent},
      // {path: 'update-responsableRH/:id', component: UpdateResprhComponent}
          //{path: 'candidats', loadChildren: () => import('./modules/candidat/candidat.module').then(m => m.CandidatModule),canActivate: [CandidatGuard]},
          {path: 'candidats', loadChildren: () => import('./modules/candidat/candidat.module').then(m => m.CandidatModule),canActivate: [RecruteurGuard]},
          {path: 'recruteur', loadChildren: () => import('./modules/recruteur/recruteur.module').then(m => m.RecruteurModule), canActivate: [ResponsableRHGuard]},
          {path: 'responsable-rh', loadChildren: () => import('./modules/responsable-rh/responsable-rh.module').then(m => m.ResponsableRHModule), canActivate: [ResponsableRHGuard] },
          {path: 'test-technique', loadChildren: () => import('./modules/test-technique/test-technique.module').then(m => m.TestTechniqueModule), canActivate: [CandidatGuard] },
          {path: 'tests-techniques', loadChildren: () => import('./modules/test-technique-r/test-technique-r.module').then(m => m.TestTechniqueRModule), canActivate: [RecruteurGuard] }
    ]},
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
