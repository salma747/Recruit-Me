import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import {AddCandidatComponent} from "./add-candidat/add-candidat.component";
import {TableListComponent} from "./table-list/table-list.component";
import {UpdateCandidatComponent} from "./update-candidat/update-candidat.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
      AddCandidatComponent,
      TableListComponent,
      UpdateCandidatComponent
  ],
  imports: [
    CommonModule,
    CandidatRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      HttpClientModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule
  ]
})
export class CandidatModule { }
