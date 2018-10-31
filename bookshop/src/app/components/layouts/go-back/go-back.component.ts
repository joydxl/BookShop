import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.css']
})
export class GoBackComponent implements OnInit {
  @Input()color: string;

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
