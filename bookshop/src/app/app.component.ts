import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { DataService } from './shared/services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bookshop';
  public footerHeight = '100px';
  public headerHeight = '125px';

  constructor(private userService: UserService, private dataService: DataService) {
  }

  ngOnInit() {
    // this.dataService.getBooks();
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeunload(event) {
    if (typeof event === 'undefined') {
      event = window.event;
    } else {
      if (this.userService.isLogged()) {
        // Chrome requires returnValue to be set.
        event.returnValue = 'message';
        // Cancel the event as stated by the standard.
        event.preventDefault();
        return 'message';
      }
    }
  }

}
