import { Component, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/shop-models';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {

  private book = new Book;
  private id: number;

  constructor(/* private */ activatedRoute: ActivatedRoute, /* private  */ dataService: DataService, router: Router) {

    // console.log('activateRoute.snapshot.params ID ', activatedRoute.snapshot.params['id']);

      this.id = +activatedRoute.snapshot.params['id'];
      activatedRoute.params.subscribe(id => {
        // console.log('id BookpageComponent', id);
        if (!dataService.bookExist(this.id)) {
          router.navigate(['']);
        }
        if (this.id) {
          console.log('befor getBookData this.id ', this.id, typeof this.id);
          this.book = dataService.getBookData(this.id);
        }
      });

  }

  ngOnInit() {
  }

}
