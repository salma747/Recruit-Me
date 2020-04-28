import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddRecruteursComponent} from "../recruteur/add-recruteur/add-recruteurs.component";
import {TableListComponent} from "./table-list/table-list.component";
import {UpdateCandidatComponent} from "./update-candidat/update-candidat.component";
import {AddCandidatComponent} from "./add-candidat/add-candidat.component";


const routes: Routes = [
  {path: 'new', component: AddCandidatComponent},
  {path: '', component: TableListComponent},
  {path: 'update/:id', component: UpdateCandidatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatRoutingModule {

}
