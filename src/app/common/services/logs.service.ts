import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { ILog } from 'app/logs/log';

@Injectable()
export class LogsService {
    private _logsUrl = 'app/common/logs.example.json';

    constructor(private _http: Http) { }

    getAll(): Observable<ILog[]> {
        return this._http.get(this._logsUrl)
            .map((response: Response) => <ILog[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getById(id: number): Observable<ILog> {
        //TODO: refactor to request the item directly
        return this.getAll()
            .map((diveLogs: ILog[]) => diveLogs.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
