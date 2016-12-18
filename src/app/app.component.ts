import { Component } from '@angular/core';
import { MDLUpgradeElementDirective } from './common/directives/';
import { AlertComponent } from './common/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Site title';
}
