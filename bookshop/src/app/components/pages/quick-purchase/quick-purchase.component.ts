import { Component, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/shop-models';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-quick-purchase',
  templateUrl: './quick-purchase.component.html',
  styleUrls: ['./quick-purchase.component.css']
})
export class QuickPurchaseComponent implements OnInit {

  private book: Book;
  private id: number;

  constructor(/* private */ activatedRoute: ActivatedRoute, /* private  */ dataService: DataService, router: Router) {

    // console.log('activateRoute.snapshot.params ID ', activatedRoute.snapshot.params['id']);

      this.id = +activatedRoute.snapshot.params['id'];
      console.log('this.id from quick-purchase ', this.id);
      activatedRoute.params.subscribe(id => {
        // console.log('id BookpageComponent', id);
        if (!dataService.bookExist(this.id)) {
          router.navigate(['']);
        }
        if (this.id) {
          console.log('befor getBookData this.id ', this.id, typeof this.id);
          // dataService.getBookData(this.id);
          this.book = dataService.activeBook;
        }
      });

  }

  ngOnInit() {
  }

}
