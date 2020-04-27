import { Routes } from '@angular/router';

//import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AddCandidatComponent } from '../../modules/candidat/add-candidat/add-candidat.component';
import { UpdateCandidatComponent } from '../../modules/candidat/update-candidat/update-candidat.component';
import { TableListComponent } from '../../modules/candidat/table-list/table-list.component';
import { AddRecruteursComponent } from '../../modules/recruteur/add-recruteur/add-recruteurs.component';
import { ListRecruteursComponent } from '../../modules/recruteur/list-recruteurs/list-recruteurs.component';
import { UpdateRecruteurComponent } from '../../modules/recruteur/update-recruteur/update-recruteur.component';
import { AddResprhComponent } from '../../modules/responsable-rh/add-resprh/add-resprh.component';
import { ListResprhComponent } from '../../modules/responsable-rh/list-resprh/list-resprh.component';
import { UpdateResprhComponent } from '../../modules/responsable-rh/update-resprh/update-resprh.component';
import { IconsComponent } from '../../icons/icons.component';
//import {DashboardComponent} from "../../dashboard/dashboard.component";
//import { MapsComponent } from '../../maps/maps.component';
//import { NotificationsComponent } from '../../notifications/notifications.component';
//import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    { path: 'update-candidat',     component: UpdateCandidatComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'update-recruteur',     component: UpdateCandidatComponent },
   // { path: 'add-recruteur',     component: AddRecruteursComponent },
    { path: 'list-recruteurs',     component: ListRecruteursComponent },
   // { path: 'add-resprh',     component: AddResprhComponent },
    { path: 'list-resprh',     component: ListResprhComponent },
    { path: 'update-resprh',     component: UpdateCandidatComponent }



    //{ path: 'icons',          component: IconsComponent },
    //{ path: 'maps',           component: MapsComponent },
    //{ path: 'notifications',  component: NotificationsComponent },
    //{ path: 'upgrade',        component: UpgradeComponent },
];
