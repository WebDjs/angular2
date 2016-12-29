import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LogsService } from 'app/common/services/logs.service';
import 'rxjs/add/operator/map';
import { ILog } from 'app/common/models';

@Component({
    templateUrl: 'app/logs/log.template.html'
})
export class LogComponent implements OnInit {
    logs: ILog[];
    errorMessage: string;

    constructor(private _diveLogsService: LogsService) {
    }

    ngOnInit(): void {
        this._diveLogsService.getAll()
            .subscribe(logs => this.logs = logs,
            error => this.errorMessage = <any>error);
    }
}