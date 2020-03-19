import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
   // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
   // { path: '/user-profile', title: 'Ajout Candidat',  icon:'person', class: '' },
    { path: '/table-list', title: 'Gestion Des Candidats',  icon:'content_paste', class: '' },
    // { path: '/add-recruteur', title: 'Ajout Recruteur',  icon:'person', class: '' },
    { path: '/list-recruteurs', title: 'Gestion Des Recruteurs',  icon:'content_paste', class: '' },
   // { path: '/add-resprh', title: 'Ajout Responsable RH',  icon:'person', class: '' },
    { path: '/list-resprh', title: 'Gestion Des ResponsablesRH',  icon:'content_paste', class: '' },

    //{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}