import { Routes } from '@angular/router';

//import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { AddRecruteursComponent } from '../../add-recruteur/add-recruteurs.component';
import { ListRecruteursComponent } from '../../list-recruteurs/list-recruteurs.component';
import { AddResprhComponent } from '../../add-resprh/add-resprh.component';
import { ListResprhComponent } from '../../list-resprh/list-resprh.component';
import { IconsComponent } from '../../icons/icons.component';
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
  //  { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'add-recruteur',     component: AddRecruteursComponent },
    { path: 'list-recruteurs',     component: ListRecruteursComponent },
    { path: 'add-resprh',     component: AddResprhComponent },
    { path: 'list-resprh',     component: ListResprhComponent },


    //{ path: 'icons',          component: IconsComponent },
    //{ path: 'maps',           component: MapsComponent },
    //{ path: 'notifications',  component: NotificationsComponent },
    //{ path: 'upgrade',        component: UpgradeComponent },
];
