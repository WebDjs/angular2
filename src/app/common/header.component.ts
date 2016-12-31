import { Component, Input, OnInit } from '@angular/core';
import { UsersService, AuthenticationService } from './services/';
import { User } from './models/';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Input() title: string;
    @Input() existingUser: User;

    constructor(private authService: AuthenticationService) { }

    logout() {
        this.authService.logout();
    }
 }
