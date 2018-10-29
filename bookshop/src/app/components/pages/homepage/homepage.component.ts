import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  @Input() innerHeight: number;
  public _innerHeight: string;
  ngOnInit() {
  }

}
