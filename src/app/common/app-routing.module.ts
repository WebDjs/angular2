import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ItemsComponent, FeaturedItemComponent } from '../items/';
import { OtherItemsComponent, FeaturedOtherItemComponent } from '../other-items/';
import { LoginComponent, RegisterComponent } from '../login/';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'items', component: ItemsComponent, children: [
    { path: 'featured/:id', component: FeaturedItemComponent }
  ] },
  { path: 'otheritems', component: OtherItemsComponent, children: [
    { path: 'featured/:id', component: FeaturedOtherItemComponent }
  ] },
  { path: '**',     redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
