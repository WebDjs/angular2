import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../models/';

@Injectable()
export class UsersService {

    constructor(private http: Http) { }

    create(user: User) {
        let headers = new Headers();
        headers.append('content-type', 'application/json');

        return this.http.post(
            'http://localhost:3000/api/signup',
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

    loggedUser(): User {
        let storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser).user : null;
    }
}
