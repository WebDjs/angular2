import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  NavMenuComponent,
  AppRoutingModule,
  AlertComponent,
  FooterComponent,
  PagerComponent,
  DropDownComponent
} from './common';
import { HomeComponent } from './home/home.component';
import { AppLogsComponent } from './app-logs/app-logs.component';
import { ItemsComponent, FeaturedItemComponent } from './items';
import { OtherItemsComponent, FeaturedOtherItemComponent } from './other-items';
import { LoginComponent, RegisterComponent } from './login/';
import { LogComponent } from './logs/log.component';
import { LocationComponent, LocationShortComponent, LocationsDetailComponent } from './locations/';
import {
  AlertService,
  AuthenticationService,
  UsersService,
  DataService,
  LocationService
} from './common/services/';
import { MDLUpgradeElementDirective, EqualValidatorDirective } from './common/directives/';
import { UserComponent } from './user/user.component';
import { UserAddDiveComponent } from './user/user-add-dive.component';
import { UserEditComponent } from './user/user-edit.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddLocationsComponent } from './add-locations/add-locations.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SortingPipe, FilterPipe, PagingPipe } from './common/pipes';

import {MyStylePlusDirective} from './app.mystyleplus';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    ItemsComponent,
    LogComponent,
    LocationComponent,
    LocationShortComponent,
    FeaturedItemComponent,
    OtherItemsComponent,
    FeaturedOtherItemComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MDLUpgradeElementDirective,
    EqualValidatorDirective,
    AlertComponent,
    UserComponent,
    UserEditComponent,
    ContactUsComponent,
    ContactDetailsComponent,
    ContactFormComponent,
    FooterComponent,
    AddLocationsComponent,
    LocationsDetailComponent,
    UserAddDiveComponent,
    FilterPipe,
    SortingPipe,
    PagingPipe,
    PagerComponent,
    DropDownComponent,
    MyStylePlusDirective,
    AppLogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjLoOGdfc69EnJR4WlNH7j_CQ0Jq4KYH8'
    })
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UsersService,
    LocationService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
