import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from 'app/common/services/data.service';
import 'rxjs/add/operator/map';
import { Log } from 'app/common/models';

@Component({
    templateUrl: 'app/logs/log.template.html'
})
export class LogComponent implements OnInit {
    logs: Log[];
    errorMessage: string;

    constructor(private _diveLogsService: DataService) {
    }

    ngOnInit(): void {
        this._diveLogsService.getAllLogs()
            .subscribe(logs => this.logs = logs,
            error => this.errorMessage = <any>error);
    }
}