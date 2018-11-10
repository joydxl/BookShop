import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import { UserService } from './services/user.service';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate, CanActivateChild, CanDeactivate<ComponentCanDeactivate> {
  constructor(private userService: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return !this.userService.isLogged();
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return confirm('Вы уверены, что хотите перейти в дочерний класс?');
  }

  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean{

    return confirm('Вы уверены, что хотите перейти?');
  }
}
