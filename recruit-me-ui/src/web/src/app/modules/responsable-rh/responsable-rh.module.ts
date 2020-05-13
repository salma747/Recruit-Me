import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsableRHRoutingModule } from './responsable-rh-routing.module';
import {AddResprhComponent} from "./add-resprh/add-resprh.component";
import {ListResprhComponent} from "./list-resprh/list-resprh.component";
import {UpdateResprhComponent} from "./update-resprh/update-resprh.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from "../../components/components.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../../app.routing.module";
import {MatCarouselModule} from "@ngmodule/material-carousel";
import {AgmCoreModule} from "@agm/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
      AddResprhComponent,
      ListResprhComponent,
      UpdateResprhComponent
  ],
  imports: [
    CommonModule,
    ResponsableRHRoutingModule,
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
export class ResponsableRHModule { }
