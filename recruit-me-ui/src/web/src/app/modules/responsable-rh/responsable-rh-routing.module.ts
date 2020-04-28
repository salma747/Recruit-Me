import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCandidatComponent} from "../candidat/add-candidat/add-candidat.component";
import {TableListComponent} from "../candidat/table-list/table-list.component";
import {UpdateCandidatComponent} from "../candidat/update-candidat/update-candidat.component";
import {AddResprhComponent} from "./add-resprh/add-resprh.component";
import {ListResprhComponent} from "./list-resprh/list-resprh.component";
import {UpdateResprhComponent} from "./update-resprh/update-resprh.component";


const routes: Routes = [
  {path: 'new', component: AddResprhComponent},
  {path: '', component: ListResprhComponent},
  {path: 'update/:id', component: UpdateResprhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsableRHRoutingModule { }
