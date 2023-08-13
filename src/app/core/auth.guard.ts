import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const isExpired = inject(JwtHelperService).isTokenExpired();
  if (isExpired) {
    inject(Router).navigate(['/authorization']);
    return false;
  }
  return true;
};
