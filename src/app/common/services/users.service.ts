import { Injectable } from '@angular/core';
import { User } from '../models/';

@Injectable()
export class UsersService {

    constructor() { }

    loggedUser(): User {
        let storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser).user : null;
    }
}
