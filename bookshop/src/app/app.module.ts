import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/page-blocks/header/header.component';
import { FilterBarComponent } from './components/page-blocks/filter-bar/filter-bar.component';
import { FooterComponent } from './components/page-blocks/footer/footer.component';
import { CategoryComponent } from './components/page-blocks/category/category.component';
import { BookComponent } from './components/page-blocks/book/book.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './components/pages/login/login.component';
import { EmptyPageComponent } from './components/pages/empty-page/empty-page.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterBarComponent,
    FooterComponent,
    CategoryComponent,
    BookComponent,
    HomepageComponent,
    LoginComponent,
    EmptyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
