import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing.module';
import { ComponentsModule } from './components/components.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCandidatComponent } from './modules/candidat/add-candidat/add-candidat.component';
import { TableListComponent } from './modules/candidat/table-list/table-list.component';
import { AddRecruteursComponent } from './modules/recruteur/add-recruteur/add-recruteurs.component';
import { ListRecruteursComponent } from './modules/recruteur/list-recruteurs/list-recruteurs.component';
import { AddResprhComponent } from './modules/responsable-rh/add-resprh/add-resprh.component';
import { ListResprhComponent } from './modules/responsable-rh/list-resprh/list-resprh.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


//import { HttpInterceptorService } from './httpInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import {MatFormFieldModule} from "@angular/material/form-field";
import { LoginComponent } from './login/login.component';
import { UpdateCandidatComponent } from './modules/candidat/update-candidat/update-candidat.component';
import {MatInputModule} from "@angular/material/input";
import {MatCarouselModule} from "@ngmodule/material-carousel";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {UpdateRecruteurComponent} from "./modules/recruteur/update-recruteur/update-recruteur.component";
import {UpdateResprhComponent} from "./modules/responsable-rh/update-resprh/update-resprh.component";
import {iamcredentials} from "googleapis/build/src/apis/iamcredentials";
import {CredentialsInterceptor} from "./core/interceptors/credentials/credentials.interceptor";
import {AuthGuard} from "./core/guards/auth/auth.guard";
import {RecruteurGuard} from "./core/guards/recruteur/recruteur.guard";
import {CandidatGuard} from "./core/guards/candidat/candidat.guard";
import {ResponsableRHGuard} from "./core/guards/responsable-rh/responsable-rh.guard";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        MatCarouselModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ],
  declarations: [
    AppComponent,
    LoginComponent,
    //UpdateCandidatComponent,
    //UpdateRecruteurComponent,
    //UpdateResprhComponent,
    //TableListComponent,
    //AddRecruteursComponent,
    AdminLayoutComponent,
    //AddResprhComponent,
    //ListRecruteursComponent,
    //ListResprhComponent,

  ],
    providers: [ {
        provide: HTTP_INTERCEPTORS,
        useClass: CredentialsInterceptor,
        multi: true },
    AuthGuard,RecruteurGuard,CandidatGuard,ResponsableRHGuard ],

  bootstrap: [AppComponent]
})
export class AppModule { }

