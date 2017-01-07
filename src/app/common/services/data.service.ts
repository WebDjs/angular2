import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Log, Location, User } from '../models/';

@Injectable()
export class DataService {

    public locationsUpdateUrl = '/api/locations/update';

    constructor(private _http: Http) { }

    public getAll<T>(url: string): any {
        return this._http.get(url)
            .map((response: Response) => <T[]>response.json());
    }

    public create<T>(model: T, url:string): any {
        let headers = new Headers(),
            token = this.getToken();

        headers.append('Content-Type', 'application/json');
        headers.append('authorization', token);

        return this._http.post(url,
            JSON.stringify(model),
            { headers: headers })
            .map(response => <T>response.json())
    }

    public update<T>(url: string, model: any): any {
        let headers = new Headers(),
            token = this.getToken();
        headers.append('Content-type', 'application/json');
        headers.append('authorization', token);
        return this._http.post(
            url,
            JSON.stringify(model), { headers: headers })
            .map((response: Response) => {
                let updatedmodel = <T>response.json();
                return updatedmodel;
            });
    }

    getToken(): string {
        let storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser).token : null;
    }
}
