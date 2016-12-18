import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../common/services/index';
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
        private alertService: AlertService) { }

    ngOnInit() {
        this.model = {
            username: '',
            password: ''
        };

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
    }

    register() {
        this.loading = true;
        this.authenticationService.create(this.model.username, this.model.password)
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
        console.log(duplicateField);
        return duplicateField + ' is already taken';
    }
}
