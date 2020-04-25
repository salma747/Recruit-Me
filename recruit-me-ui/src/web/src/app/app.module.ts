import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
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
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HttpInterceptorService } from './httpInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import {MatFormFieldModule} from "@angular/material/form-field";
import { LoginComponent } from './login/login.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,

    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateCandidatComponent,
    TableListComponent,
    AddCandidatComponent,
    AddRecruteursComponent,
    //AddResprhComponent,
    ListRecruteursComponent
    //ListResprhComponent,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
