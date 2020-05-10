import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruteurGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = JSON.parse(localStorage.getItem("login"));
    if(user &&
        (user.authorities.findIndex(auth => auth.authority === 'ROLE_RECRUTEUR') >= 0 || user.authorities.findIndex(auth => auth.authority === 'ROLE_RESPONSABLE_RH') >= 0)) {
      return true;

    }
    this.router.navigate(['/login']);
    return false;
  }
}
