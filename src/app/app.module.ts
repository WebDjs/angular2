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
import { DiveLogComponent } from './dive-logs/dive-log.component';
import {
  AlertService,
  AuthenticationService,
  UsersService,
  DiveLogsService
} from './common/services/';
import { MDLUpgradeElementDirective } from './common/directives/';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    ItemsComponent,
    DiveLogComponent,
    FeaturedItemComponent,
    OtherItemsComponent,
    FeaturedOtherItemComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MDLUpgradeElementDirective,
    AlertComponent
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
    DiveLogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
