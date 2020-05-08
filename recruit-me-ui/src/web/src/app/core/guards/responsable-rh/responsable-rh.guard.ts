import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsableRHGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = JSON.parse(localStorage.getItem("login"));
    if(!user || user.authorities.indexOf("ROLE_RESPONSABLE_RH") < 0) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
