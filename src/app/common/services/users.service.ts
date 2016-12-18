import { Injectable } from '@angular/core';
import { User } from '../models/';

@Injectable()
export class UsersService {

    constructor() { }

    loggedUser(): User {
        let loggedUser = localStorage.getItem('currentUser');

        return  loggedUser ?
            JSON.parse(loggedUser) :
            null;
    }
}
