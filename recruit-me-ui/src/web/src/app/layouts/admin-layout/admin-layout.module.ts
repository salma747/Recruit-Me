import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
//import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AddCandidatComponent } from '../../modules/candidat/add-candidat/add-candidat.component';
import { TableListComponent } from '../../modules/candidat/table-list/table-list.component';
import { AddRecruteursComponent } from '../../modules/recruteur/add-recruteur/add-recruteurs.component';
import { ListRecruteursComponent } from '../../modules/recruteur/list-recruteurs/list-recruteurs.component';
import { AddResprhComponent } from '../../modules/responsable-rh/add-resprh/add-resprh.component';
import { ListResprhComponent } from '../../modules/responsable-rh/list-resprh/list-resprh.component';
//import { TypographyComponent } from '../../typography/typography.component';
//import { IconsComponent } from '../../icons/icons.component';
//import { MapsComponent } from '../../maps/maps.component';
//import { NotificationsComponent } from '../../notifications/notifications.component';
//import { UpgradeComponent } from '../../upgrade/upgrade.component';


import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {AdminLayoutComponent} from "./admin-layout.component";
import {ComponentsModule} from "../../components/components.module";
import {UpdateCandidatComponent} from "../../modules/candidat/update-candidat/update-candidat.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ComponentsModule,
  ],
  declarations: [
    //DashboardComponent,
    // UpdateCandidatComponent,
    // UserProfileComponent,
    //TableListComponent,
    //AddRecruteursComponent,
    //AddResprhComponent,
    //ListRecruteursComponent,
    //ListResprhComponent,
    // AdminLayoutComponent,
    //IconsComponent,
    //MapsComponent,
    //NotificationsComponent,
    //UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
