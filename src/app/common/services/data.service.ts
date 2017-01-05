import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Log, Location, User } from '../models/';

@Injectable()
export class DataService {
    private _logsUrl = '/api/logs/read';
    public locationsUrl = '/api/locations/read';
    public locationsUpdateUrl = '/api/locations/update';

    constructor(private _http: Http) { }

    private getAll<T>(url: string): any {
        return this._http.get(url)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    getLocationById(id: string): Observable<Location> {
        let endpoint = this.locationsUrl + '/' + id;
        return this._http.get(endpoint)
            .map((response: Response) => {
                let location: Location = response.json().data[0];
                return location;
            })
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

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

    updateLocation(location: Location) {
        let headers = new Headers(),
            token = this.getToken();
        headers.append('Content-type', 'application/json');
        headers.append('authorization', token);
        return this._http.post(
            this.locationsUpdateUrl,
            JSON.stringify(location), { headers: headers})
            .map((response: Response) => {
                let updatedLocation = response.json();
                return updatedLocation;
            });
    }

    getToken(): string {
        let storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser).token : null;
    }
}
