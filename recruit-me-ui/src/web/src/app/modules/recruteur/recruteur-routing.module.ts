import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCandidatComponent} from "../candidat/add-candidat/add-candidat.component";
import {TableListComponent} from "../candidat/table-list/table-list.component";
import {UpdateCandidatComponent} from "../candidat/update-candidat/update-candidat.component";
import {AddRecruteursComponent} from "./add-recruteur/add-recruteurs.component";
import {ListRecruteursComponent} from "./list-recruteurs/list-recruteurs.component";
import {UpdateRecruteurComponent} from "./update-recruteur/update-recruteur.component";


const routes: Routes = [
  {path: 'new', component: AddRecruteursComponent},
  {path: '', component: ListRecruteursComponent},
  {path: 'update/:id', component: UpdateRecruteurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruteurRoutingModule { }
