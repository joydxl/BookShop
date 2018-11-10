import { Component, OnInit } from '@angular/core';

import { NavigationService } from 'src/app/shared/services/navigation.service';


@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.css']
})
export class EmptyPageComponent implements OnInit {
  
  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
  }
}
