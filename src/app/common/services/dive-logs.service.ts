import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs';

import {IDiveLog } from 'app/dive-logs/dive-log';

@Injectable()
export class DiveLogsService {
    private _diveLogsUrl = 'app/common/dive-logs.example.json';

    constructor(private _http: Http) { }

    getAll(): Observable<IDiveLog[]> {
        return this._http.get(this._diveLogsUrl)
            .map((response: Response) => <IDiveLog[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getById(id: number): Observable<IDiveLog> {
        //TODO: refactor to request the item directly
        return this.getAll()
            .map((diveLogs: IDiveLog[]) => diveLogs.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
