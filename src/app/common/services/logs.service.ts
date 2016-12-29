import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { ILog, ILocation } from 'app/common/models';

@Injectable()
export class LogsService {
    private _logsUrl = 'app/common/logs.example.json';
    private _locationsUrl = 'app/common/locations.example.json';

    constructor(private _http: Http) { }

    // getAll(): Observable<T> {

    // }

    getAllLogs(): Observable<ILog[]> {
        return this._http.get(this._logsUrl)
            .map((response: Response) => <ILog[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getLogById(id: number): Observable<ILog> {
        //TODO: refactor to request the item directly
        return this.getAllLogs()
            .map((diveLogs: ILog[]) => diveLogs.find(p => p.id === id));
    }

    getAllLocations(): Observable<ILocation[]> {
        return this._http.get(this._locationsUrl)
                    .map((response: Response) => <ILocation[]>response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    // mapResponse() {

    // }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
