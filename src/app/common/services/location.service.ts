import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { Log, Location, User } from '../models/';
import { DataService } from './data.service';
import * as util from '../constants';

@Injectable()
export class LocationService {

    constructor(private dataService: DataService, private http: Http) { }

    router: Router;

    getAllLocations(): any {
        return this.dataService.getAll(util.endpont.allLocations);
    }

    getById(id: string): Observable<Location> {

        let endpoint = util.endpont.allLocations + '/' + id;
        return this.http.get(endpoint)
            .map((response: Response) => {
                let location: Location = response.json().data[0];
                return location;
            })
            .do(data => console.log('All: ' + JSON.stringify(data)));
    }

    createLocation(newLocation: Location) {
        return this.dataService.create(newLocation, util.endpont.createLocation)
    }

    updateLocation(location: Location) {
        return this.dataService.update(util.endpont.updateLocation, location);
    }

    getToken(): string {
        let storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser).token : null;
    }
}
