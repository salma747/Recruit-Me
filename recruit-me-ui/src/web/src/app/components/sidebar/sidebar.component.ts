import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role: string[];
}
export const ROUTES: RouteInfo[] = [
   // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
   // { path: '/user-profile', title: 'Ajout CandidatModel',  icon:'person', class: '' },
    { path: '/candidats', title: 'Gestion Des Candidats',  icon:'person', class: '', role: ["ROLE_RESPONSABLE_RH","ROLE_RECRUTEUR"] },
    // { path: '/add-recruteur', title: 'Ajout Recruteur',  icon:'person', class: '' },
    { path: '/recruteur', title: 'Gestion Des Recruteurs',  icon:'event_note', class: '', role: ["ROLE_RESPONSABLE_RH"] },
   // { path: '/add-resprh', title: 'Ajout Responsable RH',  icon:'person', class: '' },
    { path: '/responsable-rh', title: 'Gestion Des ResponsablesRH',  icon:'group', class: '', role: ["ROLE_RESPONSABLE_RH"] },
    { path: '/test', title: 'Gestion Des Test technique',  icon:'list_alt', class: '', role: ["ROLE_CANDIDAT"] },
    //{ path: '/responsable-rh', title: 'Gestion Des ResponsablesRH',  icon:'content_paste', class: '', role: ["ROLE_RESPONSABLE_RH"] },

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
  canView(menu: RouteInfo) {
      const user = JSON.parse(localStorage.getItem("login"));

      user.authorities = user.authorities.map(role => role.authority);
      const value = menu.role.find(role => user.authorities.indexOf(role) >= 0);
      console.log(value);
      return !!value;
  }
}
