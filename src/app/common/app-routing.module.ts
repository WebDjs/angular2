import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ItemsComponent, FeaturedItemComponent } from '../items/';
import { OtherItemsComponent, FeaturedOtherItemComponent } from '../other-items/';
import { LoginComponent, RegisterComponent } from '../login/';
import { AuthGuard } from '../common/guards/';
import { LogComponent } from '../logs/log.component';
import { LocationComponent } from '../locations/locations.component';
import { UserComponent, UserEditComponent } from '../user/';
import { ContactUsComponent } from '../contact-us/';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'items', component: ItemsComponent, children: [
    { path: 'featured/:id', component: FeaturedItemComponent }
  ] },
  { path: 'logs', component: LogComponent },
  { path: 'locations', component: LocationComponent },
  { path: 'otheritems', canActivate: [AuthGuard], component: OtherItemsComponent, children: [
    { path: 'featured/:id', component: FeaturedOtherItemComponent }
  ]
  },
  { path: 'userprofile', component: UserComponent },
  { path: 'userprofileedit/:id', component: UserEditComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: '**',     redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
