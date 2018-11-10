import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './components/pages/login/login.component';
import { EmptyPageComponent } from './components/pages/empty-page/empty-page.component';
import { SingUpComponent } from './components/pages/sing-up/sing-up.component';
import { BookpageComponent } from './components/pages/bookpage/bookpage.component';
import { RoutingGuard } from './shared/routing.guard';
import { ManagerRoutingGuard } from './shared/manager-routing.guard';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent, canActivate: [RoutingGuard]},
  {path: 'add-book', component: EmptyPageComponent, canActivate: [ManagerRoutingGuard]},
  {path: '#', component: EmptyPageComponent},
  {path: 'sing-up', component: SingUpComponent},
  {path: 'bookpage', component: BookpageComponent},
  {path: 'bookpage/:id', component: BookpageComponent},
  {path: '**', component: EmptyPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
