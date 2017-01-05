import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../models/';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UsersService {
    private serverUrl: string;

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
            this.serverUrl = '/api';
        }

    create(user: User) {
        let headers = new Headers();
        headers.append('content-type', 'application/json');

        return this.http.post(
            this.serverUrl + '/signup',
            JSON.stringify(user),
            { headers: headers })
            .map((response: Response) => {
                // register and login successful if there's a jwt token in the response
                let registeredUser = response.json();
                if (registeredUser && registeredUser.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(registeredUser));
                }
            });
    }

    update(user: User) {
        let headers = new Headers(),
            token = this.getToken();

        headers.append('content-type', 'application/json');
        headers.append('authorization', token);

        return this.http.post(
            this.serverUrl + '/updateUserInfo',
            JSON.stringify(user),
            { headers: headers })

            .map((response: Response) => {
                let updatedUser = response.json();
                if (updatedUser && updatedUser.success) {
                    // update stored user details in local storage
                    let storedUser = JSON.parse(localStorage.getItem('currentUser'));
                    storedUser.user = updatedUser.user;
                    localStorage.setItem('currentUser', JSON.stringify(storedUser));
                }

                return updatedUser;
            });
    }

    delete(username: string) {
        let headers = new Headers(),
            token = this.getToken();

        headers.append('content-type', 'application/json');
        headers.append('authorization', token);

        return this.http.post(
            this.serverUrl + '/deleteUser',
            username,
            { headers: headers })
            .subscribe((response: Response) => {
                this.authenticationService.logout();
            });
    }

    getToken(): string {
        let storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser).token : null;
    }

    loggedUser(): User {
        let storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser).user : null;
    }
}
