import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { AddRecruteursComponent } from './add-recruteur/add-recruteurs.component';
import { ListRecruteursComponent } from './list-recruteurs/list-recruteurs.component';
import { AddResprhComponent } from './add-resprh/add-resprh.component';
import { ListResprhComponent } from './list-resprh/list-resprh.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    //AddRecruteursComponent,
    //AddResprhComponent,
    //ListRecruteursComponent,
    //ListResprhComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
