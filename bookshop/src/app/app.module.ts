import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FilterBarComponent } from './components/layouts/filter-bar/filter-bar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CategoryComponent } from './components/layouts/category/category.component';
import { BookComponent } from './components/layouts/book/book.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './components/pages/login/login.component';
import { EmptyPageComponent } from './components/pages/empty-page/empty-page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { SearchComponent } from './components/layouts/search/search.component';
import { SingUpComponent } from './components/pages/sing-up/sing-up.component';
import { BookpageComponent } from './components/pages/bookpage/bookpage.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgIf } from '@angular/common';




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
    EmptyPageComponent,
    SearchComponent,
    SingUpComponent,
    BookpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
