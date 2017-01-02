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
  FooterComponent
} from './common';
import { HomeComponent } from './home/home.component';
import { ItemsComponent, FeaturedItemComponent } from './items';
import { OtherItemsComponent, FeaturedOtherItemComponent } from './other-items';
import { LoginComponent, RegisterComponent } from './login/';
import { LogComponent } from './logs/log.component';
import { LocationComponent } from './locations/locations.component';
import {
  AlertService,
  AuthenticationService,
  UsersService,
  DataService
} from './common/services/';
import { MDLUpgradeElementDirective, EqualValidatorDirective } from './common/directives/';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    ItemsComponent,
    LogComponent,
    LocationComponent,
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UsersService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
