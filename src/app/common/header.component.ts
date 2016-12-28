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

    userName: string = 'Test';


    constructor(private authService: AuthenticationService) { }

    ngOnInit() {
        console.log(this.existingUser);
    }

    logout() {
        this.authService.logout();
    }
 }
