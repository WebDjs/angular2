import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';
import { MDLUpgradeElementDirective } from './common/directives/';
import { AlertComponent } from './common/';
import { UsersService } from './common/services';
import { User } from './common/models/';
import 'material-design-lite/dist/material';
import 'mdl-select-component/mdl-selectfield.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `      
      .mdl-layout__content.page-content {
      	padding: 24px;
      }
    `
  ]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'DiveIn';
  currentUser: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.currentUser = this.usersService.loggedUser();
  }

  ngDoCheck() {
    this.currentUser = this.usersService.loggedUser();
  }
}
