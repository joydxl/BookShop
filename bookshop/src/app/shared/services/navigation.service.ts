import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterEvent, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
/* import { Observable,  } from 'rxjs';
import 'rxjs/add/operator/filter'; */

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  previousUrl: string;

  constructor(private location: Location, private router: Router) {

    router.events
    .pipe(filter((e: any) => e instanceof RoutesRecognized),
        pairwise()
    ).subscribe((e: any) => {
        this.previousUrl = e[0].urlAfterRedirects;
    });

  }

  goBack() {
    if (this.previousUrl) {
      this.location.back();
    } else {
      console.log ('You just entered app! Redirecting to Homepage...');
      this.router.navigateByUrl('');
    }
  }
  goManager(role) {
    if (role === 'manager') {
      this.router.navigateByUrl('');
    } else {
      return false;
    }
  }

  goHome() {
    if (!this.previousUrl) {
      this.router.navigateByUrl('');
    } else {
      /* const goHome = confirm('Hit "Yes" If you want to go Homepage. But if you want to go previous page, hit "Cancel"');
      if (goHome) { */
        this.router.navigateByUrl('');
      /* } else {
        this.location.back();
      } */
    }
  }

}
