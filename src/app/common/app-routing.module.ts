import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ItemsComponent, FeaturedItemComponent } from '../items/';
import { OtherItemsComponent, FeaturedOtherItemComponent } from '../other-items/';
import { LoginComponent, RegisterComponent } from '../login/';
import { AuthGuard } from '../common/guards/';
import { LogComponent } from '../logs/log.component';
import { LocationComponent } from '../locations/locations.component';
import { LocationsDetailComponent } from '../locations/locations-detail.component';
import { UserComponent, UserEditComponent, UserAddDiveComponent } from '../user/';
import { ContactUsComponent } from '../contact-us/';
import { AddLocationsComponent } from '../add-locations/';
import { AppLogsComponent } from '../app-logs/app-logs.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adddive', canActivate: [AuthGuard], component: UserAddDiveComponent },
  { path: 'logs', canActivate: [AuthGuard], component: LogComponent },
  { path: 'applogs', component: AppLogsComponent },
  { path: 'locations/details/:id', component: LocationsDetailComponent },
  { path: 'locations/:page', component: LocationComponent },
  { path: 'locations', component: LocationComponent },
  { path: 'userprofile', canActivate: [AuthGuard], component: UserComponent },
  { path: 'userprofileedit/:id', canActivate: [AuthGuard], component: UserEditComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'addlocations', canActivate: [AuthGuard], component: AddLocationsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
