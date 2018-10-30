import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  private authors: any;

  getAuthors() {
    // it should get array of authors objects from database and return it
    return [
      {'id': 'a1', 'firstName': 'Screw', 'lastName': 'Driver', 'books': ['b1', 'b2', 'b3'] },
      {'id': 'a2', 'firstName': 'Screw2', 'lastName': 'Driver2', 'books': ['b1', 'b2', 'b4'] },
      {'id': 'a3', 'firstName': 'Screw3', 'lastName': 'Driver3', 'books': ['b3', 'b4'] }
    ];
  }

  constructor() { }

  ngOnInit() {
    this.authors = this.getAuthors();
  }

}
