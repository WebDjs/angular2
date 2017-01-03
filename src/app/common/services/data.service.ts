import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Log, Location, User } from 'app/common/models';

@Injectable()
export class DataService {
    private _logsUrl = 'app/common/logs.example.json';
    public locationsUrl = 'http://localhost:3000/api/locations/read';
    private _usersUrl = 'app/common/users.example.json';

    constructor(private _http: Http) { }

    private getAll<T>(url: string): any {
         return this._http.get(url)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    getLocationById(id: string): Observable<Location> {
        let endpoint = this.locationsUrl + "/" + id;
        return this._http.get(endpoint)
            .map((response: Response) => <Location>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAllLogs(): Observable<Log[]> {
       return this.getAll<Log>(this._logsUrl);
    }

    getLogById(id: string): Observable<Log> {
        // TODO: refactor to request the item directly
        return this.getAllLogs()
            .map((diveLogs: Log[]) => diveLogs.find(p => p.id === id));
    }

    getAllLocations(): any {
        return this.getAll(this.locationsUrl);
    }

    getUserById(id: string): Observable<User>{
        console.log('get all',  this.getAll<User>(this._usersUrl));
         return this.getAll<User>(this._usersUrl)
            .map((users: User[]) => users.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
