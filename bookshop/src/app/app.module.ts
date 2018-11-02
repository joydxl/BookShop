import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { GoBackComponent } from './components/layouts/go-back/go-back.component';
import { BookpageComponent } from './components/pages/bookpage/bookpage.component';


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
    GoBackComponent,
    BookpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
