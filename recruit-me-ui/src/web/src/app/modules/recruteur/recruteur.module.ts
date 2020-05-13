import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruteurRoutingModule } from './recruteur-routing.module';
import {AddRecruteursComponent} from "./add-recruteur/add-recruteurs.component";
import {ListRecruteursComponent} from "./list-recruteurs/list-recruteurs.component";
import {UpdateRecruteurComponent} from "./update-recruteur/update-recruteur.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
      AddRecruteursComponent,
      ListRecruteursComponent,
      UpdateRecruteurComponent
  ],
  imports: [
    CommonModule,
    RecruteurRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      HttpClientModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatSnackBarModule,
      MatDialogModule,
      SharedModule

  ]
})
export class RecruteurModule { }
