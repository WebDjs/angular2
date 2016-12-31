import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  HeaderComponent,
  NavMenuComponent,
  HomeComponent,
  AppRoutingModule,
  AlertComponent
} from './common';
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
import { MDLUpgradeElementDirective } from './common/directives/';
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
    AlertComponent,
    UserComponent,
    UserEditComponent,
    ContactUsComponent,
    ContactDetailsComponent,
    ContactFormComponent
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
