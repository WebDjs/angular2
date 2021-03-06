import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService, UsersService } from '../common/services/';
import { User } from '../common/models/';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: User;
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private usersService: UsersService) { }

    ngOnInit() {
        this.model = {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            firstName: '',
            lastName: ''
        };

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
    }

    register() {
        this.loading = true;
        this.usersService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    // E11000 duplicate key error collection: a2teamwork.users index: username_1 dup key: { : "Pesho" }
                    let message = this.parseErrorMessage(JSON.parse(error._body).msg.message);
                    this.alertService.error(message);
                    this.loading = false;
                });
    }

    parseErrorMessage(message: string) {
        let duplicateField = message.substring((message.indexOf('index: ') + 6), (message.indexOf('dup ') - 3));
        return duplicateField + ' is already taken';
    }
}
