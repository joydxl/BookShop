import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './components/pages/login/login.component';
import { EmptyPageComponent } from './components/pages/empty-page/empty-page.component';
import { SingUpComponent } from './components/pages/sing-up/sing-up.component';
import { BookpageComponent } from './components/pages/bookpage/bookpage.component';
import { RoutingGuard } from './shared/routing.guard';
import { ManagerRoutingGuard } from './shared/manager-routing.guard';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { QuickPurchaseComponent } from './components/pages/quick-purchase/quick-purchase.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent, canActivate: [RoutingGuard]},
  {path: 'add-book', component: AddBookComponent, canActivate: [ManagerRoutingGuard]},
  {path: '#', component: EmptyPageComponent},
  {path: 'sing-up', component: SingUpComponent},
  {path: 'bookpage', component: BookpageComponent},
  {path: 'book', component: BookpageComponent},
  {path: 'book/:id', component: BookpageComponent},
  {path: 'book/:id/purchase', component: QuickPurchaseComponent},
  {path: '**', component: EmptyPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
