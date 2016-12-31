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
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .page-content {
        background-color: #f5f5f5;
        width: 100%;
        margin: 0 auto;
        padding: 30px;
      }
    `,
    require('material-design-lite/dist/material.min.css'),
    require('mdl-select-component/mdl-selectfield.min.css'), // for select input (optional)
  ]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Site title';
  currentUser: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.currentUser = this.usersService.loggedUser();
  }

  ngDoCheck() {
    this.currentUser = this.usersService.loggedUser();
  }
}
