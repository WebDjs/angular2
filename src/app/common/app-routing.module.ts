import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ItemsComponent, FeaturedItemComponent } from '../items/';
import { OtherItemsComponent, FeaturedOtherItemComponent } from '../other-items/';
import { LoginComponent, RegisterComponent } from '../login/';
import { AuthGuard } from '../common/guards/';
import { LogComponent } from '../logs/log.component';
import { UserComponent } from '../user/';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'items', component: ItemsComponent, children: [
    { path: 'featured/:id', component: FeaturedItemComponent }
  ] },
  { path: 'logs', component: LogComponent },
  { path: 'otheritems', canActivate: [AuthGuard], component: OtherItemsComponent, children: [
    { path: 'featured/:id', component: FeaturedOtherItemComponent }
  ]
  },
  { path: 'userprofile', component: UserComponent },
  { path: '**',     redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
