import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { NavigationService } from './services/navigation.service';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class ManagerRoutingGuard implements CanActivate {
  constructor(private userService: UserService, private navigationService: NavigationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // return this.userService.isManager();
      if (!this.userService.isManager()) {
        this.navigationService.goHome();
      } else {
        return true;
      }
  }
  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean {

    return confirm('Вы уверены, что хотите перейти?');
  }
}
